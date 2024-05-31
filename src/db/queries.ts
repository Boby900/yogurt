import { db } from '@/db/db';
import { CreatePost, GetPost, postTable } from '@/db/schema';
// import { db } from './db';
// import { InsertUser, usersTable } from './schema';

//   export default async function createUser(data: CreatePost) {
//     await db.insert(postTable).values(data);
//   }

//   import db from "@/db/drizzle";
// import { todo } from "@/db/schema";

// export const addTodo = async (id: number, text: string) => {
//   await db.insert(todo).values({
//     id: id,
//     text: text,
//   });
// };




import { asc } from 'drizzle-orm';

export const getData = async () => {
  const data = await db.select().from(postTable);
  console.log(data);

  return data;
};