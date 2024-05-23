import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ui/mode-toggle";
import { DropdownMenuCheckboxes } from "./drop-down";


export const Header = () => {
  return (
    <div className=" h-[100px]">
      <header className="flex justify-around pt-4 bg-inherit">
        <div><Button>Yogurt</Button></div>
        <div>
          <Input placeholder="Search for your products" />
        </div>

        <div><DropdownMenuCheckboxes /></div>
        <div><Button>Cart</Button></div>
        <div><Button>Become a Seller</Button></div>
        <div><ModeToggle /></div>
       
      


      </header>
    </div>
  );
};
