"use server";
import { db } from "@/db/db";
import { postTable } from "@/db/schema";
import { MyFormFields } from "@/components/Form";
import { currentUser } from "@clerk/nextjs/server";

export const addData = async (data: MyFormFields) => {
  const user = await currentUser();
  if (!user) throw new Error('User not found');
  await db.insert(postTable).values({
    user_id: user.id,
    title: data.title,
    content: data.content,
  });

  console.log("data added to db");
 
};
