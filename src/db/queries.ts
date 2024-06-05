"use server";
import { db } from "@/db/db";
import { postTable } from "@/db/schema";
import { MyFormFields } from "@/components/Form";
import {revalidatePath} from "next/cache";
export const addData = async (data: MyFormFields) => {
  await db
    .insert(postTable)
    .values({
      title: data.title,
      content: data.content,
    })
    revalidatePath("/upload");
  console.log("data added to db");
};


