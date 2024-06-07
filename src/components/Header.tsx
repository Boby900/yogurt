"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import { Menu } from "lucide-react";
import { Package2 } from "lucide-react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Header(){
  return (
    <div className="border-2 h-[100px]">
      <header className="flex  justify-around pt-8 bg-inherit">
        <div className="">
          <Link
            href="/"
            className="flex bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600   items-center gap-2 font-semibold"
          >
            <Package2 className="h-6 hidden md:block w-6 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" />
            <Menu className="h-6 w-6  md:hidden" />
            <span className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 hidden md:block">
              Yogurt
            </span>
          </Link>
        </div>
        <div>
          <Input placeholder="Search for your products" />
        </div>
        <div className="">
          <SignedOut>
            <SignInButton>
              <Button variant={"outline"}>Login</Button>
            </SignInButton>
          </SignedOut>
        </div>

        <div className="hidden md:block">
          <Button variant={"outline"}><Link href="/dashboard">Dashboard</Link></Button>
        </div>
       
        <div className="hidden md:block">
          <Button variant={"outline"}>
            <Link href="/pricing">Pricing</Link>
          </Button>
        </div>
        <div className="hidden md:block">
          <Button variant={"outline"}>
            <Link href="/upload" aria-label="feedback">Feedback</Link>
          </Button>
        </div>
        <div className="">
          <ModeToggle />
        </div>
        <SignedIn>
          <div className="">
            <UserButton />
          </div>
        </SignedIn>
      </header>
    </div>
  );
};
