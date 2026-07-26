/**
 * Production server for cPanel / Güzel Hosting Node.js App.
 * cPanel "Setup Node.js App" → Startup file: server.js
 * PORT is set automatically by the hosting panel.
 */

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Request error:", err);
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }).listen(port, hostname, () => {
    console.log(`HemoBot ready on port ${port} (${dev ? "development" : "production"})`);
  });
});
