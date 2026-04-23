import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function directoryRedirectPlugin() {
  const redirectablePaths = new Set([
    "/privacy/gym-timer",
    "/privacy/mp2-calculator",
  ]);

  const attachMiddleware = (server) => {
    server.middlewares.use((req, res, next) => {
      const requestUrl = req.url ? req.url.split("?")[0] : "";

      if (redirectablePaths.has(requestUrl)) {
        res.statusCode = 302;
        res.setHeader("Location", `${requestUrl}/`);
        res.end();
        return;
      }

      next();
    });
  };

  return {
    name: "directory-redirect-plugin",
    configureServer: attachMiddleware,
    configurePreviewServer: attachMiddleware,
  };
}

export default defineConfig({
  plugins: [react(), directoryRedirectPlugin()],
});
