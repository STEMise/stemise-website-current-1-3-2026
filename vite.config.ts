import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@radix-ui") || id.includes("lucide-react")) return "ui";
          if (id.includes("@tanstack")) return "react-query";
          return "vendor";
        },
      },
      plugins: [
        prerender({
          routes: [
            "/",
            "/partners",
            "/donations",
            "/team",
            "/courses",
            "/kits",
            "/contact",
          ],
          renderer: new PuppeteerRenderer({
            renderAfterTime: 1000,
          }),
        }),
      ],
    },
  },
}));
