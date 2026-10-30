import type { NextConfig } from "next";
import fs from "fs";

try {
  const real = fs.realpathSync(process.cwd());
  if (process.cwd() !== real) {
    process.chdir(real);
  }
} catch {}

const nextConfig: NextConfig = {};

export default nextConfig;
