'use server'
import { auth } from '@clerk/nextjs/server';
import postgres from "postgres";

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
// export async function addItem(formData: FormData) {
//   const { userId } = auth();

//   if (!userId) {
//     throw new Error('You must be signed in to add an item to your cart');
//   }

//   console.log(`${formData.get('data')}`);
// }

// // Next.js example



// const conn = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
// });

// function selectAll() {
//   return conn.query("SELECT * FROM hello_world");
// }







export default async function Page(formData: FormData) {
  try {
    const sql = postgres(process.env.DATABASE_URL ?? "", { ssl: 'require' });
    await sql`CREATE TABLE IF NOT EXISTS comments (comment TEXT)`;
    const comment = String(formData.get("data")); // Convert comment to a string
    await sql`INSERT INTO comments (comment) VALUES (${comment})`;
    console.log("Comment added");
  } catch (error) {
      console.log(error)
  } 
  
  }

  
  // return (
  //   <form action={create}>
  //     <input type="text" placeholder="write a comment" name="comment" />
  //     <button type="submit">Submit</button>
  //   </form>
  // );
