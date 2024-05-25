"use client";
import { addItem } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ProfileForm() {
  return (
    <form action={addItem} className="space-y-8">
      <Input placeholder="name" name="data" />
      <Button type="submit">Submit</Button>
    </form>
  );
}
