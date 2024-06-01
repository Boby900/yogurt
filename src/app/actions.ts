// /src/app/actions.ts
"use server";
import { getData } from "@/db/queries";

export async function getPosts() {
  return getData();
}