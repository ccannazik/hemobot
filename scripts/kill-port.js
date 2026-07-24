#!/usr/bin/env node
/**
 * Frees a port before starting the dev server.
 * Only stops Node/Next.js processes to avoid killing unrelated apps.
 * Usage: node scripts/kill-port.js 3000
 */

const { execSync } = require("child_process");

const port = process.argv[2] || "3000";

try {
  const output = execSync(`lsof -i :${port} -sTCP:LISTEN -t 2>/dev/null`, {
    encoding: "utf8",
  }).trim();

  const pids = output.split("\n").filter(Boolean);

  if (pids.length === 0) {
    console.log(`Port ${port} is already free.`);
    process.exit(0);
  }

  for (const pid of pids) {
    try {
      const cmd = execSync(`ps -p ${pid} -o comm=`, { encoding: "utf8" }).trim();
      // Only kill node/next processes
      if (!/node|next/i.test(cmd)) {
        console.log(`Skipping non-Node process ${pid} (${cmd}) on port ${port}`);
        continue;
      }
      process.kill(Number(pid), "SIGTERM");
      console.log(`Stopped ${cmd} (pid ${pid}) on port ${port}`);
    } catch {
      // process may have already exited
    }
  }

  execSync("sleep 0.5");
} catch {
  console.log(`Port ${port} is already free.`);
}
