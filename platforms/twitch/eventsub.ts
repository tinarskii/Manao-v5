import { logger } from "@/helpers/logger";
import { getUserConfig } from "@/server/api/config";
import { TWITCH } from "@/config";
import { io } from "@/server/services/socket.io";
import type { ApiClient } from "@twurple/api";
import type { ChatClient } from "@twurple/chat";
import { EventSubWsListener } from "@twurple/eventsub-ws";
import type { Configuration } from "@/core/types";

function parseTemplate(template: string, data: Record<string, string>): string {
  return template.replace(/\[([^\]]+)]/g, (_, key: string) => data[key] ?? "");
}

export async function initializeEventSub(
  chatClient: ChatClient,
  apiClient: ApiClient,
): Promise<void> {
  const listener = new EventSubWsListener({ apiClient });

  const config = await getUserConfig();
  const channel = TWITCH.BROADCASTER.CHANNEL;
  const broadcasterId = TWITCH.BROADCASTER.ID;
  const botId = TWITCH.BOT.ID;

  if (!broadcasterId || !botId || !channel) {
    logger.warn(
      "[EventSub] Missing broadcaster/bot credentials — skipping EventSub",
    );
    return;
  }

  setupFollowListener(
    listener,
    chatClient,
    channel,
    broadcasterId,
    botId,
    config,
  );
  setupSubscriptionListener(
    listener,
    chatClient,
    channel,
    broadcasterId,
    config,
  );
  setupGiftSubscriptionListener(
    listener,
    chatClient,
    channel,
    broadcasterId,
    config,
  );
  setupCheerListener(listener, chatClient, channel, broadcasterId, config);
  setupRaidListener(listener, chatClient, channel, broadcasterId, config);
  setupRedemptionListeners(listener, broadcasterId, config);

  listener.start();
  logger.info("[EventSub] Listener started");
}

function setupFollowListener(
  listener: EventSubWsListener,
  chatClient: ChatClient,
  channel: string,
  broadcasterId: string,
  botId: string,
  config: Configuration,
): void {
  listener.onChannelFollow(broadcasterId, botId, async (data) => {
    const msg = parseTemplate(config.customMessages.onFollow[config.language], {
      user: data.userDisplayName,
    });
    await chatClient.say(channel, msg);

    io.emit("feed", {
      status: "success",
      icon: "💟",
      name: data.userDisplayName,
      action: "Followed",
    });

    logger.info(`[EventSub] New follower: ${data.userDisplayName}`);
  });

  logger.info("[EventSub] Registered follower listener");
}

function setupSubscriptionListener(
  listener: EventSubWsListener,
  chatClient: ChatClient,
  channel: string,
  broadcasterId: string,
  config: Configuration,
): void {
  listener.onChannelSubscription(broadcasterId, async (data) => {
    const tier = String(Number(data.tier) / 1000);
    const msg = parseTemplate(
      config.customMessages.onSubscribe[config.language],
      {
        user: data.userDisplayName,
        tier,
      },
    );
    await chatClient.say(channel, msg);

    io.emit("feed", {
      status: "success",
      icon: "⭐",
      name: data.userDisplayName,
      action: `Subscribed (Tier ${tier})`,
    });

    logger.info(
      `[EventSub] New subscriber: ${data.userDisplayName} (Tier ${tier})`,
    );
  });

  logger.info("[EventSub] Registered subscription listener");
}

function setupGiftSubscriptionListener(
  listener: EventSubWsListener,
  chatClient: ChatClient,
  channel: string,
  broadcasterId: string,
  config: Configuration,
): void {
  listener.onChannelSubscriptionGift(broadcasterId, async (data) => {
    // Anonymous gifters have no display name
    const gifterName = data.gifterDisplayName ?? "Anonymous";
    const msg = parseTemplate(
      config.customMessages.onGiftSubscribe[config.language],
      {
        user: gifterName,
        amount: String(data.amount),
      },
    );
    await chatClient.say(channel, msg);

    io.emit("feed", {
      status: "success",
      icon: "🎁",
      name: gifterName,
      action: `Gifted ${data.amount} sub(s)`,
    });

    logger.info(`[EventSub] Gift subs: ${gifterName} gifted ${data.amount}`);
  });

  logger.info("[EventSub] Registered gift subscription listener");
}

function setupCheerListener(
  listener: EventSubWsListener,
  chatClient: ChatClient,
  channel: string,
  broadcasterId: string,
  config: Configuration,
): void {
  listener.onChannelCheer(broadcasterId, async (data) => {
    const cheererName = data.userDisplayName ?? "Anonymous";
    const msg = parseTemplate(config.customMessages.onCheer[config.language], {
      user: cheererName,
      amount: String(data.bits),
    });
    await chatClient.say(channel, msg);

    io.emit("feed", {
      status: "success",
      icon: "💎",
      name: cheererName,
      action: `Cheered ${data.bits} bits`,
    });

    logger.info(`[EventSub] Cheer: ${cheererName} cheered ${data.bits} bits`);
  });

  logger.info("[EventSub] Registered cheer listener");
}

function setupRaidListener(
  listener: EventSubWsListener,
  chatClient: ChatClient,
  channel: string,
  broadcasterId: string,
  config: Configuration,
): void {
  listener.onChannelRaidTo(broadcasterId, async (data) => {
    const raiderName = data.raidingBroadcasterDisplayName;
    const msg = parseTemplate(config.customMessages.onRaid[config.language], {
      user: raiderName,
      viewers: String(data.viewers),
    });
    await chatClient.say(channel, msg);

    io.emit("feed", {
      status: "success",
      icon: "🚀",
      name: `${raiderName} (${data.viewers} viewers)`,
      action: "Raided",
    });

    logger.info(
      `[EventSub] Raid from ${raiderName} with ${data.viewers} viewers`,
    );
  });

  logger.info("[EventSub] Registered raid listener");
}

function setupRedemptionListeners(
  listener: EventSubWsListener,
  broadcasterId: string,
  config: Configuration,
): void {
  for (const reward of config.soundRewards) {
    if (!reward.isEnabled || !reward.soundFile) continue;

    listener.onChannelRedemptionAddForReward(
      broadcasterId,
      reward.id,
      (data) => {
        io.emit("play-sound", {
          url: reward.soundFile,
          name: reward.title,
          redeemedBy: data.userDisplayName,
        });
        logger.info(
          `[EventSub] Redemption: "${reward.title}" by ${data.userDisplayName}`,
        );
      },
    );
  }

  if (config.soundRewards.length > 0) {
    logger.info(
      `[EventSub] Registered ${config.soundRewards.length} redemption listener(s)`,
    );
  }
}
