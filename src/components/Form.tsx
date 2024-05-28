"use client";
import Page from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export function ProfileForm() {
  
  
   
  return (
    <form action={Page} className="space-y-8">
      <Input
        placeholder="name"
        name="data"
      />
     <button type="submit">submit</button>

      
    </form>
  );
}
