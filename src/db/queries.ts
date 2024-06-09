"use server";
import { db } from "@/db/db";
import { postTable } from "@/db/schema";
import { MyFormFields } from "@/components/Form";

export const addData = async (data: MyFormFields) => {
  await db
    .insert(postTable)
    .values({
      title: data.title,
      content: data.content,
    })
   
  console.log("data added to db");
};


