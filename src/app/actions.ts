"use server";
import postgres from 'postgres';
import zod from 'zod';

const schema = zod.object({
  data: zod.string(),
});

export default async function Page(formData: FormData) {
 
    const sql = postgres(process.env.NEXT_PUBLIC_DATABASE_URL, { ssl: 'require' });
    await sql`CREATE TABLE IF NOT EXISTS bob_bob (
      id SERIAL PRIMARY KEY,
      comments TEXT
    )`;
    const comment = formData.get("data");
    if (comment) {
      // Insert the comment into the table using parameterized query
      await sql`INSERT INTO bob_bob (comments) VALUES (${comment})`;
      console.log('Comment added successfully');
    } else {
      console.error('No data provided');
    }
  }
  
  
