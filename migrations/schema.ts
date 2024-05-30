import { pgTable, serial, text, real } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const playing_with_neon = pgTable("playing_with_neon", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	value: real("value"),
});

export const comments = pgTable("comments", {
	comment: text("comment"),
});

export const bob_bob = pgTable("bob_bob", {
	id: serial("id").primaryKey().notNull(),
	comments: text("comments"),
});