import { Paper, Typography, Button, Alert, Stack, Box, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { SetupConfig } from "../App";

export default function DonePage({ config }: { config: SetupConfig }) {
  const platforms = [
    { name: "Twitch", ok: config.twitch.enabled && config.twitch.hasTokens, color: "#9147ff" },
    { name: "Discord", ok: config.discord.enabled && config.discord.hasToken, color: "#5865f2" },
    { name: "Kick", ok: config.kick.enabled && config.kick.hasTokens, color: "#53fc18" },
  ];
  const anyEnabled = platforms.some((p) => p.ok);

  return (
    <Paper sx={{ p: 4, textAlign: "center" }}>
      <CheckCircleIcon sx={{ fontSize: 64, color: "success.main", mb: 2 }} />
      <Typography variant="h5" fontWeight={700} gutterBottom>
        {anyEnabled ? "Setup Complete!" : "No Platforms Configured"}
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {anyEnabled
          ? "Your bot is ready. Start it with the command below."
          : "Go back and enable at least one platform to use the bot."}
      </Typography>

      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 4 }}>
        {platforms.filter((p) => p.ok).map((p) => (
          <Chip key={p.name} label={p.name} color="success" variant="outlined" />
        ))}
      </Stack>

      {anyEnabled && (
        <Box
          sx={{
            bgcolor: "grey.900", borderRadius: 2, p: 2, mb: 3,
            fontFamily: "monospace", fontSize: 14, textAlign: "left",
          }}
        >
          <Typography fontFamily="monospace" color="primary.light">bun start</Typography>
        </Box>
      )}

      <Alert severity="info" sx={{ mb: 3, textAlign: "left" }}>
        The dashboard will be available at{" "}
        <strong>http://localhost:3000</strong> after starting the bot.
      </Alert>

      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined" fullWidth
          onClick={() => window.location.href = "/"}
        >
          Back to Welcome
        </Button>
        {anyEnabled && (
          <Button
            variant="contained" fullWidth
            onClick={() => window.location.href = "http://localhost:3000"}
          >
            Open Dashboard
          </Button>
        )}
      </Stack>
    </Paper>
  );
}