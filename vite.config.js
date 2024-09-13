import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), EnvironmentPlugin("all")],
    esbuild: {
      pure: mode === "production" ? ["console.log"] : [], // Remove console log command
      // drop: ['console', 'debugger'],
    },
  };
});
