import { i18n } from "@/i18n";
import { version } from "@/package.json";
import type { Command } from "@/core/types";

export default {
  name: { en: "version", th: "เวอร์ชัน" },
  description: { en: "Check bot's current version", th: "ตรวจสอบเวอร์ชันของบอท" },
  aliases: { en: ["v", "ver"], th: ["ว"] },
  execute: async (ctx) => {
    const t = i18n[ctx.language];
    await ctx.reply(t.info.version(version, Bun.version));
  },
} satisfies Command;
