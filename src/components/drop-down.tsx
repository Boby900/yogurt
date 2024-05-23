"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CalendarIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Login</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-50">
        <div className="flex justify-between space-x-1 mr-2">
          <div className="flex items-center flex-col pt-2 ">
            <div>New Customer? <Button className="ml-2">Sign Up</Button></div>
            <Button className="mt-1"  variant={"outline"}>My Profile</Button>
            <Button className="mt-1" variant={"outline"}>Yogurt Plus</Button>
            <Button className="mt-1" variant={"outline"}>My Wishlist</Button>
            <Button className="mt-1" variant={"outline"}>My Orders</Button>
            <Button className="mt-1" variant={"outline"}>My Rewards</Button>
            
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

// <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button>Login</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>New Customer?  <Button variant={"outline"}>Sign Up</Button></DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuCheckboxItem
//           checked={showStatusBar}
//           onCheckedChange={setShowStatusBar}
//         >
//           My Profile
//         </DropdownMenuCheckboxItem>
//         <DropdownMenuCheckboxItem
//           checked={showPanel}
//           onCheckedChange={setShowPanel}
//         >
//           Wishlist
//         </DropdownMenuCheckboxItem>
//         <DropdownMenuCheckboxItem
//           checked={showPanel}
//           onCheckedChange={setShowPanel}
//         >
//           Orders
//         </DropdownMenuCheckboxItem>
//         <DropdownMenuCheckboxItem
//           checked={showPanel}
//           onCheckedChange={setShowPanel}
//         >
//           Rewards
//         </DropdownMenuCheckboxItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
