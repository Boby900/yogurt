"use server";
import { db } from "@/db/db";
import { postTable } from "@/db/schema";
import { MyFormFields } from "@/components/Form";
// export const getData = async () => {
//   const data = await db.select().from(postTable);
//   console.log(data);
//   console.log(data.map((d) => d.id));
//   console.log("data received from db");

//   return data;
// };

export const addData = async (data: MyFormFields) => {
  await db
    .insert(postTable)
    .values({
      title: data.title,
      content: data.content,
    })
  console.log("data added to db");
};

