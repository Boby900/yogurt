ALTER TABLE "post_table" ALTER COLUMN "content" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "post_table" ALTER COLUMN "content" SET NOT NULL;