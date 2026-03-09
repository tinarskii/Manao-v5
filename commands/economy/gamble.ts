import { addBalance, getBalance, initAccount, subtractBalance } from "@/db";
import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "gamble", th: "พนัน" },
  description: { en: "For you, gambling addict", th: "สำหรับคนติดพนันอย่างคุณ" },
  aliases: { en: ["bet"], th: [] },
  arguments: [
    {
      name: { en: "amount", th: "จำนวนเงิน" },
      description: { en: "Amount of money to gamble", th: "จำนวนเงินที่ต้องการพนัน" },
      required: false,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const id = initAccount(ctx.user.platformID, ctx.user.platform);
    const balance = getBalance(id);

    let amount = Math.trunc(parseInt(args[0] ?? "1", 10));

    if ((Number.isNaN(amount) || amount < 0) && args[0] !== "all") {
      await ctx.reply(t.economy.errorInvalidAmount());
      return;
    }

    if (args[0] === "all") {
      amount = balance;
    } else if (amount > balance) {
      await ctx.reply(t.economy.errorInsufficientFunds());
      return;
    }

    const win = Math.random() >= 0.5;

    if (win) {
      addBalance(id, amount);
      ctx.emit("feed", { status: "success", icon: "🎰", name: ctx.user.name, action: `+ ${amount} ${ctx.currency}` });
      await ctx.reply(`🎉 ${t.economy.gambleWin(amount, ctx.currency, balance + amount, ctx.currency)}`);
    } else {
      subtractBalance(id, amount);
      ctx.emit("feed", { status: "danger", icon: "🎰", name: ctx.user.name, action: `- ${amount} ${ctx.currency}` });
      await ctx.reply(`❌ ${t.economy.gambleLose(amount, ctx.currency, balance - amount, ctx.currency)}`);
    }
  },
} satisfies Command;
