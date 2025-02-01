import React from "react";
import Link from "next/link";
import { Navigation } from "./navigation";
import { Separator } from "./ui/separator";
import WorkspaceSwitcher from "./workspace-switcher";
import Projects from "./projects";
import Image from "next/image";

import logo from "../../public/movesquares.png";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 dark:bg-gray-800  p-4 w-full">
      <Link href="/">
        <Image height={100} width={100} src={logo} alt="Move Squares logo" />
      </Link>
      <Separator className="my-4" />
      <WorkspaceSwitcher />
      <Separator className="my-4" />
      <Navigation />
      <Separator className="my-4" />
      <Projects />
    </aside>
  );
};
