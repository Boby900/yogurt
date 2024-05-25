import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./ui/mode-toggle";

import {
 
  Package2,
 
} from "lucide-react";
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export const Header = () => {
  

  return (
    <div className=" h-[100px]">
      <header className="flex justify-around pt-4 bg-inherit">
        <div>
        <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Yogurt</span>
            </Link>
          
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
          <Button variant={'outline'}><Link href="/upload">Inventory</Link> </Button>
        </div>
        <div>
          <Button variant={'outline'}>Become a Seller</Button>
        </div>
        <div>
          <ModeToggle />
        </div>
        <SignedIn>
          <div>
            <UserButton />
          </div>
        </SignedIn>
      
      </header>
    </div>
  );
};
