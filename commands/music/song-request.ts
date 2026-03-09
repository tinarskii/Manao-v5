import { i18n } from "@/i18n";
import { songQueue } from "@/server/services/socket.io";
import {
  searchYoutubeVideo,
  getYouTubeVideoInfo,
  isPlaylistUrl,
} from "@/helpers/youtube";
import type { Command } from "@/core/types";

export default {
  name: { en: "song-request", th: "ขอเพลง" },
  description: { en: "Request a song", th: "ขอเพลงที่ต้องการ" },
  aliases: { en: ["sr"], th: ["ข", "ขอ"] },
  arguments: [
    {
      name: { en: "song", th: "เพลง" },
      description: {
        en: "The song you want to request",
        th: "เพลงที่คุณต้องการขอ",
      },
      required: true,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const query = args.join(" ");
    const result = await searchYoutubeVideo(query);

    if (!result || isPlaylistUrl(result.url)) {
      await ctx.reply(t.song.errorSongRequestPlaylist());
      return;
    }

    const info = await getYouTubeVideoInfo(result.videoId);
    if (!info || info.lengthSeconds > 600 || info.isLiveContent) {
      await ctx.reply(t.song.errorSongNotFound());
      return;
    }

    const inQueue = songQueue.findIndex((s) => s.id === info.videoId);
    if (inQueue !== -1) {
      await ctx.reply(t.song.errorSongAlreadyInQueue(inQueue + 1));
      return;
    }

    songQueue.push({
      title: info.title,
      author: info.author,
      thumbnail: info.thumbnail,
      id: info.videoId,
      requestedBy: ctx.user.name,
    });

    ctx.emit("songRequest", { index: songQueue.length - 1, queue: songQueue });

    const position =
      songQueue.length - 1 === 0
        ? t.song.songCurrentlyPlaying()
        : t.song.queueAt(songQueue.length - 1);

    await ctx.reply(t.song.songAdded(info.title, info.author, position));
  },
} satisfies Command;
