import { addBalance, getBalance, initAccount, subtractBalance } from "@/db";
import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

export default {
  name: { en: "autobet", th: "พนันอัตโนมัติ" },
  description: {
    en: "Automatically gamble multiple times",
    th: "พนันอัตโนมัติหลายครั้ง",
  },
  aliases: { en: ["ab"], th: [] },
  arguments: [
    {
      name: { en: "amount", th: "จำนวนเงิน" },
      description: { en: "Amount of money per bet", th: "จำนวนเงินต่อการพนัน" },
      required: true,
    },
    {
      name: { en: "times", th: "จำนวนครั้ง" },
      description: {
        en: "Number of times to auto-bet",
        th: "จำนวนครั้งที่จะพนันอัตโนมัติ",
      },
      required: true,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const id = initAccount(ctx.user.platformID, ctx.user.platform);

    let amount = Math.trunc(parseInt(args[0] ?? "0", 10));
    const times = Math.trunc(parseInt(args[1] ?? "0", 10));

    if (Number.isNaN(amount) || amount <= 0) {
      await ctx.reply(t.economy.errorInvalidAmount());
      return;
    }

    if (Number.isNaN(times) || times <= 0 || times > 100) {
      await ctx.reply(t.economy.errorInvalidTimes());
      return;
    }

    let currentBalance = getBalance(id);
    let totalWon = 0;
    let totalLost = 0;

    for (let i = 0; i < times; i++) {
      if (currentBalance <= 0) break;
      if (amount > currentBalance) amount = currentBalance;

      const win = Math.random() < 0.5;
      if (win) {
        addBalance(id, amount);
        totalWon += amount;
      } else {
        subtractBalance(id, amount);
        totalLost += amount;
      }

      currentBalance = getBalance(id);
    }

    await ctx.reply(
      `🎲 ${t.economy.autobetResult(times, totalWon, totalLost, currentBalance, ctx.currency)}`,
    );
  },
} satisfies Command;
