"use client";
// import createUser from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { getData } from "@/db/queries";
export function ProfileForm() {
  
  
   
  return (
    <form  className="space-y-8">
      {/* <Input
        placeholder="name"
        name="title"
      />
      <Input
        placeholder="description"
        name="content"
      /> */}
     <button onSubmit={getData} type="submit">submit</button>

      
    </form>
  );
}
