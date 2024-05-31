ALTER TABLE "post_table" DROP CONSTRAINT "post_table_user_id_users_table_id_fk";
--> statement-breakpoint
ALTER TABLE "post_table" DROP COLUMN IF EXISTS "user_id";