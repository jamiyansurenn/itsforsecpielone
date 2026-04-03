const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const src = path.join(root, "cute-bay-site", "out");
const dest = path.join(root, "public");

if (!fs.existsSync(src)) {
  console.error("Missing cute-bay-site/out. Run next build in cute-bay-site first.");
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
