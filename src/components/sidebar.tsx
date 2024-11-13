import React from "react";
import Link from "next/link";
import logo from "../../public/movesquares.png";
import Image from "next/image";
import { Navigation } from "./navigation";
import { Separator } from "./ui/separator";
import WorkspaceSwitcher from "./workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/">
        <Image
          src={logo}
          alt="Move Squares logo"
          width={125}
          height={100}
        ></Image>
      </Link>
      <Separator className="my-4" />
      <WorkspaceSwitcher />
      <Separator className="my-4" />
      <Navigation />
    </aside>
  );
};
