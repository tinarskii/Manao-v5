import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "game", th: "เกม" },
  description: { en: "Change the stream's game", th: "เปลี่ยนเกมของสตรีม" },
  aliases: { en: ["g"], th: [] },
  permission: "moderator",
  platforms: ["twitch"],
  arguments: [
    {
      name: { en: "game", th: "เกม" },
      description: { en: "The game you want to change to", th: "เกมที่คุณต้องการเปลี่ยนไป" },
      required: false,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const gameName = args.join(" ");

    ctx.emit("setGame", {
      channelID: ctx.channel,
      gameName: gameName || null,
      onCurrent: async (name: string) => {
        await ctx.say(t.configuration.currentGame(name));
      },
      onSuccess: async (name: string) => {
        await ctx.reply(t.configuration.currentGameChanged(name));
      },
      onNotFound: async () => {
        await ctx.reply(t.configuration.errorGameNotFound(gameName));
      },
    });
  },
} satisfies Command;
