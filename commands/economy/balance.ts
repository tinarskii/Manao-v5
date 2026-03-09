import { getBalance, initAccount } from "@/db";
import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "balance", th: "ยอดเงิน" },
  description: { en: "Check your balance", th: "ตรวจสอบยอดเงินของคุณ" },
  aliases: { en: ["bal", "money"], th: [] },
  arguments: [
    {
      name: { en: "user", th: "ผู้ใช้" },
      description: { en: "User to check balance", th: "ผู้ใช้ที่ต้องการตรวจสอบยอดเงิน" },
      required: false,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const targetName = args[0] ?? ctx.user.name;
    const targetId = initAccount(ctx.user.platformID, ctx.user.platform);
    const balance = getBalance(targetId);

    ctx.emit("feed", {
      status: "normal",
      icon: "👛",
      name: ctx.user.name,
      action: `${balance} ${ctx.currency}`,
    });

    await ctx.reply(t.economy.currentBalance(balance, ctx.currency));
  },
} satisfies Command;
