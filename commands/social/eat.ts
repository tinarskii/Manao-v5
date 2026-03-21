import { i18n } from "@/i18n";
import type { Command } from "@/core/types";

const foods = {
  th: [
    "ข้าว",
    "ก๋วยเตี๋ยว",
    "ส้มตำ",
    "ไก่ทอด",
    "ขนมจีน",
    "สเต็ก",
    "ไก่ย่าง",
    "หมูกระทะ",
    "หมูทอด",
    "หมูสะเต๊ะ",
    "หมูกรอบ",
    "หมูย่าง",
    "หมูทอดกรอบ",
    "หมูสามชั้น",
    "หมูสับ",
  ],
  en: [
    "rice",
    "noodles",
    "som tam",
    "fried chicken",
    "kanom jeen",
    "steak",
    "grilled chicken",
    "mookata",
    "fried pork",
    "moo satay",
    "crispy pork",
    "grilled pork",
    "crispy fried pork",
    "pork belly",
    "minced pork",
  ],
};

export default {
  name: { en: "eat", th: "กินอะไรดี" },
  description: { en: "Suggest what to eat", th: "แนะนำว่าจะกินอะไรดี" },
  aliases: { en: [], th: ["กินอะไร", "กินไร"] },
  execute: async (ctx) => {
    const t = i18n[ctx.language];
    const list = foods[ctx.language];
    const food = list[Math.floor(Math.random() * list.length)] ?? "";
    await ctx.reply(t.misc.eat(food));
  },
} satisfies Command;
