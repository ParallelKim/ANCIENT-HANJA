import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { PluginOption, defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  registerType: "autoUpdate",
  injectRegister: "auto",
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
  },
  includeAssets: ["logo.svg", "apple-touch-icon.png", "mask-icon.svg"],
  manifest: {
    name: "고대한자",
    short_name: "고대한자",
    description: "고려대학교 한자이해능력인증시험을 대비한 한자 학습 어플리케이션",
    theme_color: "#bd0e32",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr() as unknown as PluginOption,
    visualizer() as unknown as PluginOption,
    VitePWA(manifest as any),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
  optimizeDeps: {
    include: ["@mui/material", "@emotion/react", "@emotion/styled"],
  },
});
