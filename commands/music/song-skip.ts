import { i18n } from "@/i18n";
import { songQueue } from "@/server/services/socket.io";
import type { Command } from "@/core/types";

export default {
  name: { en: "song-skip", th: "ข้ามเพลง" },
  description: { en: "Skip a song", th: "ข้ามเพลงปัจจุบัน" },
  aliases: { en: ["skip", "sk"], th: ["ช้าม"] },
  execute: async (ctx) => {
    const t = i18n[ctx.language];
    const current = songQueue[0];

    if (!current) {
      await ctx.reply(t.song.queueEmpty());
      return;
    }

    const canSkip = current.requestedBy === ctx.user.name || ctx.user.roles.isModerator || ctx.user.roles.isBroadcaster;
    if (!canSkip) {
      await ctx.reply(t.song.errorSongRemovedNoPermission());
      return;
    }

    const title = current.title;
    songQueue.shift();
    ctx.emit("songSkip", songQueue);

    const queueStatus = songQueue.length === 0
      ? t.song.queueEmpty()
      : t.song.queueLength(songQueue.length);

    await ctx.reply(t.song.songSkipped(1, title, queueStatus));
  },
} satisfies Command;
