"use server";
import postgres from 'postgres';


export default async function Page(formData: FormData) {
 
    const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });
    await sql`CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      comment TEXT
    )`;
    const comment = formData.get("data");
    if (comment) {
      // Insert the comment into the table using parameterized query
      await sql`INSERT INTO comments (comment) VALUES (${comment})`;
      console.log('Comment added successfully');
    } else {
      console.error('No data provided');
    }
  }
  
  
