// // /src/app/actions.ts
// "use server";
// import { getData } from "@/db/queries";
// import addData
import { MyFormFields } from "@/components/Form";
export async function getPosts(data: MyFormFields) {
//   return getData();
console.log({ firstName: data.title, lastName: data.content});
}