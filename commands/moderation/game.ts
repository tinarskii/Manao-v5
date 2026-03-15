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
      description: {
        en: "The game you want to change to",
        th: "เกมที่คุณต้องการเปลี่ยนไป",
      },
      required: false,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];

    if (!ctx.setGame) {
      await ctx.reply(t.moderation.errorPlatformUnsupported());
      return;
    }

    const gameName = args.join(" ");

    if (!gameName) {
      const current = await ctx.setGame("");
      if (current !== null) {
        await ctx.say(t.configuration.currentGame(current));
      }
      return;
    }

    const resolved = await ctx.setGame(gameName);
    if (resolved === null) {
      await ctx.reply(t.configuration.errorGameNotFound(gameName));
    } else {
      await ctx.reply(t.configuration.currentGameChanged(resolved));
    }
  },
} satisfies Command;
