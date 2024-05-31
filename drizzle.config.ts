// import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

 config({ path: ".env.local" });

// export default defineConfig({
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!
//   },
//   schema: "../yogurt/src/db/schema.ts",
//   out: "./migrations",
// });

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  schema: "./src/db/schema.ts",
  out: "./migrations",
});