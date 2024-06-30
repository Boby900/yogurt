import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { env } from "./env";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schema: "./src/db/schema.ts",
  out: "./migrations",
});