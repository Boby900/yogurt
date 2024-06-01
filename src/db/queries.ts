'use server'
import { db } from '@/db/db';
import { postTable } from '@/db/schema';

export const getData = async () => {
  const data = await db.select().from(postTable);
  console.log(data.map((d) => d));
  console.log('data received from db');

  return data;
};