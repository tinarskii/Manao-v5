import { getUserConfig, updateUserConfig } from "@/server/api/config";
import { logger } from "@/helpers/logger";
import type { Platform, ScheduledMessage } from "@/core/types";

type SendFn = (platform: Platform, message: string) => Promise<void>;

interface SchedulerHandle {
  id: string;
  timer: ReturnType<typeof setInterval>;
  index: number;
}

const handles: Map<string, SchedulerHandle> = new Map();

let sendFn: SendFn | null = null;

export function setSendFn(fn: SendFn) {
  sendFn = fn;
}

export async function startScheduledMessages() {
  stopAll();
  const config = await getUserConfig();
  const messages = config.scheduledMessages ?? [];
  for (const msg of messages) {
    if (msg.isEnabled) startOne(msg);
  }
  logger.info(`[Scheduler] Started ${handles.size} scheduled message(s)`);
}

export function startOne(msg: ScheduledMessage) {
  stopOne(msg.id);

  let index = 0;

  const timer = setInterval(async () => {
    if (!sendFn) return;

    let text: string;
    if (msg.mode === "random") {
      text = msg.messages[Math.floor(Math.random() * msg.messages.length)]!;
    } else {
      text = msg.messages[index % msg.messages.length]!;
      index++;
    }

    for (const platform of msg.platforms) {
      try {
        await sendFn(platform, text);
      } catch (err) {
        logger.error(`[Scheduler] Failed to send on ${platform}: ${err}`);
      }
    }
  }, msg.intervalSeconds * 1000);

  handles.set(msg.id, { id: msg.id, timer, index });
}

export function stopOne(id: string) {
  const handle = handles.get(id);
  if (handle) {
    clearInterval(handle.timer);
    handles.delete(id);
  }
}

export function stopAll() {
  for (const handle of handles.values()) {
    clearInterval(handle.timer);
  }
  handles.clear();
}

export async function reloadScheduledMessages() {
  await startScheduledMessages();
}
