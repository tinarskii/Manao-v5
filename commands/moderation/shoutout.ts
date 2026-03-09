import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "shoutout", th: "แนะนำ" },
  description: { en: "Shoutout to someone!", th: "แนะนำใครสักคน!" },
  aliases: { en: ["so"], th: [] },
  permission: "moderator",
  platforms: ["twitch"],
  arguments: [
    {
      name: { en: "user", th: "ผู้ใช้" },
      description: { en: "The user you want to shoutout", th: "ผู้ใช้ที่คุณต้องการแนะนำ" },
      required: true,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const target = args[0];
    if (!target) return;

    ctx.emit("shoutout", {
      channelID: ctx.channel,
      targetName: target,
      onSuccess: async () => {
        await ctx.reply(t.moderation.shoutoutSuccess(target));
      },
      onError: async () => {
        await ctx.reply(t.moderation.errorCannotShoutout());
      },
      onNotFound: async () => {
        await ctx.reply(t.moderation.errorUserNotFound(target));
      },
    });
  },
} satisfies Command;
