import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/summish/",   // <-- REQUIRED for GitHub Pages
});
