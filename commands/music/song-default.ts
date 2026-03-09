import { i18n } from "@/i18n";
import { getUserConfig, updateUserConfig } from "@/server/api/config";
import { searchYoutubeVideo, getYouTubeVideoInfo, isPlaylistUrl } from "@/helpers/youtube";
import type { Command } from "@/core/types";

export default {
  name: { en: "song-default", th: "เพลงเริ่มต้น" },
  description: { en: "Set a default song(s)", th: "ตั้งเพลงเริ่มต้น" },
  aliases: { en: ["sd"], th: ["เพลงเริ่ม"] },
  permission: "broadcaster",
  arguments: [
    {
      name: { en: "action", th: "คำสั่ง" },
      description: { en: "Action to perform (set, add)", th: "คำสั่งที่ต้องการทำ (set, add)" },
      required: true,
    },
    {
      name: { en: "song(s)", th: "เพลง" },
      description: { en: "Song(s) separated by commas", th: "เพลงที่คั่นด้วยเครื่องหมายคอมม่า" },
      required: true,
    },
  ],
  execute: async (ctx, args) => {
    const t = i18n[ctx.language];
    const action = args[0]?.toLowerCase();

    if (action !== "set" && action !== "add") {
      await ctx.reply(t.song.errorSongInvalidAction());
      return;
    }

    const songs = args.slice(1).join(" ").split(",").map((s) => s.trim()).filter(Boolean);
    if (songs.length === 0) {
      await ctx.reply(t.song.errorSongNotFound());
      return;
    }

    const validSongs = [];
    for (const song of songs) {
      const result = await searchYoutubeVideo(song);
      if (!result || isPlaylistUrl(result.url)) continue;
      const info = await getYouTubeVideoInfo(result.videoId);
      if (!info || info.lengthSeconds > 600 || info.isLiveContent) continue;
      validSongs.push({ title: info.title, author: info.author, thumbnail: info.thumbnail, id: info.videoId });
    }

    if (validSongs.length === 0) {
      await ctx.reply(t.song.errorSongNotFound());
      return;
    }

    if (action === "set") {
      await updateUserConfig("defaultSongs", validSongs);
      await ctx.reply(t.song.songDefaultSet(validSongs.length));
    } else {
      const config = await getUserConfig();
      const updated = [...config.defaultSongs, ...validSongs];
      await updateUserConfig("defaultSongs", updated);
      await ctx.reply(t.song.songDefaultAdd(updated.length));
    }
  },
} satisfies Command;
