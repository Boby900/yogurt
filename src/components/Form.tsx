"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addData } from "@/db/queries";
import { Cloudinary } from "@cloudinary/url-gen";
import { useToast } from "@/components/ui/use-toast"

import { Textarea } from "@/components/ui/textarea";
import React, { useState, FormEvent } from 'react'
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters.",
  }),
});
export type MyFormFields = z.infer<typeof formSchema>;
export default function ProfileForm() {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()
  const cld = new Cloudinary({ cloud: { cloudName: process.env.CloudinaryCloudName } });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
     
    setIsLoading(true)
    form.reset();
    try {
      await addData(values)
      toast({
        title: "Hurray!",
        description: "your feedback submitted successfully",
      })
    } catch (error) {
      console.error(error)
    }
    finally {
      setIsLoading(false)
    }


  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
        className="space-y-4 w-[60%]"


      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoFocus={true} placeholder="Name" {...field} />
              </FormControl>
              <FormDescription>Please provide your title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your experience."
                  {...field}
                />
              </FormControl>
              <FormDescription>Please provide some content.</FormDescription>
              <FormMessage />
            </FormItem>

          )}
        />
        <Button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</Button>
      </form>
    </Form>
  );
}