

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://yogurt-db_owner:MJjQV8wpu9rK@ep-calm-moon-a16epy07.ap-southeast-1.aws.neon.tech/yogurt-db?sslmode=require"
  },
  schema: "../yogurt/src/db/schema.ts",
  out: "./migrations",
});