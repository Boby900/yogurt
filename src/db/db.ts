import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

 config({ path: ".env.local" });
const bob = process.env.DATABASE_URL!;
const sql = neon(bob);
export const db = drizzle(sql);