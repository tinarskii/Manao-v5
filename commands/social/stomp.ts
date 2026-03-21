import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "stomp", th: "กระทืบ" },
  description: { en: "Stomp someone!", th: "กระทืบใครสักคน!" },
  aliases: { en: [], th: ["ถีบ"] },
  arguments: [
    {
      name: { en: "user", th: "ผู้ใช้" },
      description: {
        en: "The user you want to stomp",
        th: "ผู้ใช้ที่คุณต้องการกระทืบ",
      },
      required: false,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const target = args[0] || ctx.user.name;
    const times = Math.floor(Math.random() * 1000);
    ctx.emit("feed", {
      status: "neutral",
      icon: "👣",
      name: `${ctx.user.name} ➡ ${target}`,
      action: `${times} times`,
    });
    await ctx.say(`${ctx.user.name} 👣 ${target} ${times} ${t.misc.times()}`);
  },
} satisfies Command;
