import { Box, Grid, Paper, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import TerminalIcon from "@mui/icons-material/Terminal";
import SettingsIcon from "@mui/icons-material/Settings";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import ChatIcon from "@mui/icons-material/Chat";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import RedeemIcon from "@mui/icons-material/Redeem";
import ForumIcon from "@mui/icons-material/Forum";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const QUICK_LINKS = [
  {
    title: "Commands",
    description: "Enable/disable built-in commands and manage custom ones.",
    icon: <TerminalIcon />,
    to: "/commands",
  },
  {
    title: "Config",
    description: "Language, currency, prefixes, custom messages, chat rewards.",
    icon: <SettingsIcon />,
    to: "/config",
  },
  {
    title: "Song Queue",
    description: "View the current song queue and control playback.",
    icon: <QueueMusicIcon />,
    to: "/queue",
  },
  {
    title: "Custom Replies",
    description: "Auto-reply to keywords in chat.",
    icon: <ForumIcon />,
    to: "/replies",
  },
  {
    title: "Channel Points",
    description: "Manage sound rewards and channel point redemptions.",
    icon: <RedeemIcon />,
    to: "/channel-points",
  },
  {
    title: "Soundboard",
    description: "Manage and play sounds for your stream.",
    icon: <VolumeUpIcon />,
    to: "/soundboard",
  },
];

const OVERLAY_LINKS = [
  { label: "Chat", path: "/overlay/chat", icon: <ChatIcon fontSize="small" /> },
  {
    label: "Feed",
    path: "/overlay/feed",
    icon: <GraphicEqIcon fontSize="small" />,
  },
  {
    label: "Music",
    path: "/overlay/music",
    icon: <MusicNoteIcon fontSize="small" />,
  },
  {
    label: "Sound",
    path: "/overlay/sound",
    icon: <VolumeUpIcon fontSize="small" />,
  },
];

export function HomePage() {
  return (
    <Box sx={{ maxWidth: 900 }}>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          component="img"
          src="/manao_mini.png"
          alt="Manao"
          sx={{
            width: 40,
            height: 40,
            flexShrink: 0,
            display: { xs: "none", md: "block" },
          }}
        />
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "text.primary",
            letterSpacing: "-0.02em",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Manao Dashboard
        </Typography>
      </Box>

      {/* Quick Access */}
      <Typography
        variant="overline"
        color="text.disabled"
        sx={{ mb: 1.5, display: "block" }}
      >
        Quick Access
      </Typography>
      <Grid container spacing={1.5} sx={{ mb: 5 }}>
        {QUICK_LINKS.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Paper
              component={Link}
              to={item.to}
              sx={{
                p: 2.5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "border-color 0.15s, background 0.15s",
                cursor: "pointer",
                "&:hover": {
                  borderColor: "rgba(105,240,0,0.25)",
                  background: "#1A1A1A",
                  "& .arrow-icon": { opacity: 1, transform: "translateX(0)" },
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 1,
                    background: "rgba(105,240,0,0.08)",
                    border: "1px solid rgba(105,240,0,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#69F000",
                    "& svg": { fontSize: "1.1rem" },
                  }}
                >
                  {item.icon}
                </Box>
                <ArrowForwardIcon
                  className="arrow-icon"
                  sx={{
                    fontSize: "0.875rem",
                    color: "text.disabled",
                    opacity: 0,
                    transform: "translateX(-4px)",
                    transition: "opacity 0.15s, transform 0.15s",
                  }}
                />
              </Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, color: "text.primary", mb: 0.5 }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ lineHeight: 1.5 }}
              >
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Overlays */}
      <Typography
        variant="overline"
        color="text.disabled"
        sx={{ mb: 1.5, display: "block" }}
      >
        Stream Overlays
      </Typography>
      <Paper sx={{ p: 2.5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
              Browser Sources
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Add these URLs as Browser Sources in OBS or Streamlabs.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {OVERLAY_LINKS.map((ol) => (
              <Button
                key={ol.label}
                component={Link}
                to={ol.path}
                target="_blank"
                size="small"
                variant="outlined"
                startIcon={ol.icon}
                endIcon={<OpenInNewIcon sx={{ fontSize: "11px !important" }} />}
                sx={{ fontSize: "0.75rem" }}
              >
                {ol.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
