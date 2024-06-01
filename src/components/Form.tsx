
// import createUser from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { getPosts } from "@/app/actions";

export function ProfileForm() {
  
  
   
  return (
    <form action={getPosts} className="space-y-8">
      
     <button  type="submit">submit</button>

      
    </form>
  );
}
