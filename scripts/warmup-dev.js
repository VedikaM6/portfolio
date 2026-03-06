/**
 * Dev warmup: starts Next.js dev server, waits for it to be ready,
 * then requests the home page once so it's compiled. When you open
 * localhost:3000 in the browser, you see the full page on first load.
 */
const { spawn } = require("child_process");

const PORT = 3000;
const ORIGIN = `http://localhost:${PORT}`;
const POLL_INTERVAL_MS = 400;
const POLL_DELAY_MS = 1500;

function waitForServer() {
  return new Promise((resolve) => {
    function poll() {
      fetch(ORIGIN, { method: "GET" })
        .then((res) => {
          if (res.ok) resolve();
          else setTimeout(poll, POLL_INTERVAL_MS);
        })
        .catch(() => setTimeout(poll, POLL_INTERVAL_MS));
    }
    setTimeout(poll, POLL_DELAY_MS);
  });
}

function warmup() {
  return fetch(ORIGIN, { method: "GET" }).then((res) => {
    if (res.body) return res.text();
    return Promise.resolve();
  });
}

const isWindows = process.platform === "win32";
const nextDev = spawn("npx", ["next", "dev"], {
  stdio: "inherit",
  shell: isWindows,
  cwd: process.cwd(),
});

nextDev.on("error", (err) => {
  console.error("Failed to start Next.js:", err.message);
  process.exit(1);
});

nextDev.on("exit", (code, signal) => {
  process.exit(code != null ? code : signal ? 1 : 0);
});

waitForServer()
  .then(() => warmup())
  .then(() => {
    console.log("\n[dev] Warmup done — open %s to see the full page on first load.\n", ORIGIN);
  })
  .catch((err) => {
    console.warn("[dev] Warmup failed (server may still be usable):", err.message);
  });
