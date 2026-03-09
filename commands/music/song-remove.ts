import { i18n } from "@/i18n";
import { songQueue } from "@/server/services/socket.io";
import type { Command } from "@/core/types";

export default {
  name: { en: "song-remove", th: "ลบเพลง" },
  description: { en: "Remove a song", th: "ลบเพลงออกจากคิว" },
  aliases: { en: ["remove", "rm"], th: ["ลบ"] },
  arguments: [
    {
      name: { en: "index", th: "ลำดับ" },
      description: {
        en: "The index of the song to remove",
        th: "ลำดับของเพลงที่ต้องการลบ",
      },
      required: true,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const index = parseInt(args[0] ?? "", 10);

    if (Number.isNaN(index) || index <= 0 || !songQueue[index]) {
      await ctx.reply(t.song.errorSongIndex());
      return;
    }

    const song = songQueue[index]!;
    const canRemove =
      song.requestedBy === ctx.user.name ||
      ctx.user.roles.isModerator ||
      ctx.user.roles.isBroadcaster;
    if (!canRemove) {
      await ctx.reply(t.song.errorSongRemovedNoPermission());
      return;
    }

    const title = song.title;
    songQueue.splice(index, 1);
    ctx.emit("songQueue", songQueue);

    const queueStatus =
      songQueue.length - 1 === 0
        ? t.song.queueEmpty()
        : t.song.queueLength(songQueue.length - 1);

    await ctx.reply(t.song.songRemoved(index, title, queueStatus));
  },
} satisfies Command;
