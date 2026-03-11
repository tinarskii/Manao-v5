import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "public"),
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/setup/api": "http://localhost:4000",
    },
  },
});
