'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useEffect, useState } from "react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

export const Header = () => {
  const [images, setImages] = useState([]);
 const getImages = () => {
    fetch("/api/route")
      .then((response) => response.json())
      .then((data) => {console.log(data); setImages(data)})
      .catch((error) => console.error("Error fetching data:", error));
  };
  return (
    <div className=" h-[100px]">
      <header className="flex justify-around pt-4 bg-inherit">
        <div>
          <Button onClick={getImages}>Yogurt</Button>
      
        </div>
        {images.map(image => (
        <div key={image}>
       
          </div>))}
        <div>
          <Input placeholder="Search for your products" />
        </div>
        <div>
          <SignedOut>
            <SignInButton>
              <Button>Login</Button>
            </SignInButton>
          </SignedOut>
        </div>
        <div>
          <Button>Cart</Button>
        </div>
        <div>
          <Button>Become a Seller</Button>
        </div>
        <div>
          <ModeToggle />
        </div>
        <SignedIn>
          <div>
            {" "}
            <UserButton />
          </div>
        </SignedIn>
        <div>
          <HoverCard>
            <HoverCardTrigger>Hover</HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
        </div>
      </header>
    </div>
  );
};
