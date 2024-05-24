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

export const Header = async () => {
  const res = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
  );
  const data = await res.json()
  console.log(`this is the name of the drink ${data.drinks[0].strDrink}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return (
    <div className=" h-[100px]">
      <header className="flex justify-around pt-4 bg-inherit">
        <div>
          <Button>Yogurt</Button>
          <Input placeholder="Search for your products" />
        </div>
        <div>
          <div>{`this is the name of the drink ${data.drinks[1].strDrink}`}</div>
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
