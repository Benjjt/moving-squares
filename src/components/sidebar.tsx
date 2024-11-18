import React from "react";
import Link from "next/link";
import logo from "../../public/movesquares.png";
import Image from "next/image";
import { Navigation } from "./navigation";
import { Separator } from "./ui/separator";
import WorkspaceSwitcher from "./workspace-switcher";
import ThemeLogo from "./theme-logo";
import Projects from "./projects";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 dark:bg-gray-800  p-4 w-full">
      <Link href="/">
        <ThemeLogo />
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
