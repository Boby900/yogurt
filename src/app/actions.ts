"use server";
import { revalidatePath } from 'next/cache';
import postgres from 'postgres';
import { db } from '@/db/db';
import { CreatePost, postTable } from '@/db/schema';
// import { db } from './db';
// import { InsertUser, usersTable } from './schema';

async function Page(formData: FormData) {
 
    const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });
    await sql`CREATE TABLE IF NOT EXISTS bob_bob (
      id SERIAL PRIMARY KEY,
      comments TEXT
    )`;
    const comment = formData.get("data");
    if (comment) {
      // Insert the comment into the table using parameterized query
      await sql`INSERT INTO bob_bob (comments) VALUES (${comment})`;
      console.log('Comment added successfully');
      revalidatePath('/upload');
    } else {
      console.error('No data provided');
    }
    
  }
  
  
  export default async function createUser(data: CreatePost) {
    await db.insert(postTable).values(data);
  }