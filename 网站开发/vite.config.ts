import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 开发时直接读取外层素材；构建时 Vite 自动复制到 dist。
  publicDir: fileURLToPath(new URL("../public", import.meta.url)),
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
  build: { chunkSizeWarningLimit: 600 },
});
