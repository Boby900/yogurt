import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

export const Header = () => {
  

  return (
    <div className=" h-[100px]">
      <header className="flex justify-around pt-4 bg-inherit">
        <div>
          <Button>Yogurt</Button>
          
        </div>
        <div><Input placeholder="Search for your products" /></div>
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
      
      </header>
    </div>
  );
};
