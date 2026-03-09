import { i18n } from "@/i18n";
import { songQueue } from "@/server/services/socket.io";
import type { Command } from "@/core/types";

export default {
  name: { en: "song-queue", th: "คิวเพลง" },
  description: { en: "Check song queue", th: "ตรวจสอบคิวเพลง" },
  aliases: { en: ["queue", "sq"], th: ["คิว"] },
  arguments: [
    {
      name: { en: "page", th: "หน้า" },
      description: { en: "Page number", th: "หมายเลขหน้า" },
      required: false,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];

    if (songQueue.length === 0) {
      await ctx.reply(t.song.queueEmpty());
      return;
    }

    const page = parseInt(args[0] || "1", 10);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(songQueue.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    let msg = `${t.song.queuePageTitle(page, totalPages)} `;

    const songList = songQueue
      .slice(start, end)
      .map((song, i) => `${start + i}. ${song.title} (${song.requestedBy})`)
      .filter((_, i) => start + i !== 0) // skip currently playing
      .join(" | ");

    msg += songList;

    if (songQueue.length > end) {
      msg += ` ${t.song.queuePageFooter(songQueue.length - end)}`;
    }

    if (msg.length > 500) msg = `${msg.slice(0, 497)}...`;

    await ctx.say(msg);
  },
} satisfies Command;
