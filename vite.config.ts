import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace REPOSITORY-NAME with your actual GitHub repo name before deploying.
// If deploying to a custom domain or user/org root page, set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/spacepoint-intern-portal/",
});