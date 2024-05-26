"use client";
import { addItem } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export function ProfileForm() {
  const [data, setData] = useState("");
  function Sumbit() {
    const { pending } = useFormStatus();
    return (
      <Button
        type="submit"
        disabled={pending}
        onClick={() => setData("")}
      >
        {pending ? "Adding..." : "Add"}
      </Button>
    );
  }
  return (
    <form action={addItem} className="space-y-8">
      <Input
        placeholder="name"
        name="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Sumbit />
      <div>{data}</div>
    </form>
  );
}
