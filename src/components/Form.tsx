"use client";
import Page from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useFormStatus } from "react-dom";

export function ProfileForm() {
  const [data, setData] = useState({data: "", description: ""});
  function Sumbit() {
    const { pending } = useFormStatus();
    return (
      <Button
        type="submit"
        disabled={pending}
        onClick={() => setData({ data: "", description: "" })}
      >
        {pending ? "Submitting..." : "Sumbit"}
      </Button>
    );
  }
  return (
    <form action={Page} className="space-y-8">
      <Input
        placeholder="name"
        name="data"
        value={data.data}
        onChange={(e) => setData({ ...data, data: e.target.value })}
      />
      <Input
        placeholder="description"
        name="description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <Sumbit />
      <div>{data.data}</div>
      <div>{data.description}</div>
    </form>
  );
}
