import { useState, useEffect } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  LinearProgress,
} from "@mui/material";
import WelcomePage from "./pages/Welcome";
import TwitchPage from "./pages/Twitch";
import DiscordPage from "./pages/Discord";
import KickPage from "./pages/Kick";
import DonePage from "./pages/Done";

const theme = createTheme({
  palette: { mode: "dark", primary: { main: "#9147ff" } },
  shape: { borderRadius: 10 },
});

export interface SetupConfig {
  complete: boolean;
  twitch: {
    enabled: boolean;
    clientId: string;
    clientSecret: string;
    botId: string;
    broadcasterId: string;
    broadcasterChannel: string;
    hasTokens: boolean;
  };
  discord: { enabled: boolean; token: string; hasToken: boolean };
  kick: {
    enabled: boolean;
    clientId: string;
    clientSecret: string;
    hasTokens: boolean;
    ngrokAuthtoken: string;
    ngrokDomain: string;
  };
}

const STEPS = ["Welcome", "Twitch", "Discord", "Kick", "Done"];

export default function App() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<SetupConfig | null>(null);

  useEffect(() => {
    fetch("/setup/api/config")
      .then((r) => r.json())
      .then((c: SetupConfig) => setConfig(c));
  }, []);

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const reload = async () => {
    const c = await fetch("/setup/api/config").then((r) => r.json());
    setConfig(c);
  };

  if (!config) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LinearProgress />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          px: 2,
          py: 4,
        }}
      >
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ mb: 4, letterSpacing: -1 }}
        >
          🤖 Manao Setup
        </Typography>

        <Stepper activeStep={step} sx={{ mb: 4, width: "100%", maxWidth: 600 }}>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box sx={{ width: "100%", maxWidth: 600 }}>
          {step === 0 && <WelcomePage config={config} onNext={next} />}
          {step === 1 && (
            <TwitchPage
              config={config}
              onNext={next}
              onBack={back}
              onReload={reload}
            />
          )}
          {step === 2 && (
            <DiscordPage
              config={config}
              onNext={next}
              onBack={back}
              onReload={reload}
            />
          )}
          {step === 3 && (
            <KickPage
              config={config}
              onNext={next}
              onBack={back}
              onReload={reload}
            />
          )}
          {step === 4 && <DonePage config={config} />}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
