import { pgTable, serial, text, real, unique, integer, foreignKey, timestamp } from "drizzle-orm/pg-core"
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

export const users_table = pgTable("users_table", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	age: integer("age").notNull(),
	email: text("email").notNull(),
},
(table) => {
	return {
		users_table_email_unique: unique("users_table_email_unique").on(table.email),
	}
});

export const posts_table = pgTable("posts_table", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	user_id: integer("user_id").notNull().references(() => users_table.id, { onDelete: "cascade" } ),
	created_at: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp("updated_at", { mode: 'string' }).notNull(),
});

export const post_table = pgTable("post_table", {
	id: serial("id").primaryKey().notNull(),
	title: text("title").notNull(),
	content: text("content").notNull(),
	created_at: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updated_at: timestamp("updated_at", { mode: 'string' }).notNull(),
});