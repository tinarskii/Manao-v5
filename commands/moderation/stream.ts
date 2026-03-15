import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "stream", th: "ชื่อสตรีม" },
  description: { en: "Change the stream's name", th: "เปลี่ยนชื่อของสตรีม" },
  aliases: { en: ["title"], th: ["สตรีม"] },
  permission: "moderator",
  platforms: ["twitch"],
  arguments: [
    {
      name: { en: "name", th: "ชื่อใหม่" },
      description: {
        en: "The name you want to change to",
        th: "ชื่อที่คุณต้องการเปลี่ยน",
      },
      required: true,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];

    if (!ctx.setTitle) {
      await ctx.reply(t.moderation.errorPlatformUnsupported());
      return;
    }

    const title = args.join(" ");
    await ctx.setTitle(title);
    await ctx.say(t.moderation.streamTitleChanged(title));
  },
} satisfies Command;