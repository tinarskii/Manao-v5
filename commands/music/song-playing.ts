import { i18n } from "@/i18n";
import { songQueue } from "@/server/services/socket.io";
import type { Command } from "@/core/types";

export default {
  name: { en: "song-playing", th: "เพลงปัจจุบัน" },
  description: {
    en: "Display the currently playing song",
    th: "แสดงเพลงที่กำลังเล่นอยู่",
  },
  aliases: { en: ["playing", "nowplaying", "np"], th: ["เพลงอะไร", "เพลงไร"] },
  execute: async (ctx) => {
    const t = i18n[ctx.language];
    const current = songQueue[0];

    if (!current) {
      await ctx.reply(t.song.queueEmpty());
      return;
    }

    const queueStatus =
      songQueue.length - 1 === 0
        ? t.song.queueEmpty()
        : t.song.queueLength(songQueue.length - 1);

    await ctx.reply(
      `${t.song.songPlaying(current.title, current.author, current.requestedBy)} (${queueStatus})`,
    );
  },
} satisfies Command;
