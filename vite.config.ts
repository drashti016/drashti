import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ❌ remove this line:
// import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // ❌ remove or comment out this line:
    // mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
