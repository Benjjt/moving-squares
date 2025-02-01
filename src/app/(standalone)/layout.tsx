import React from "react";
import Link from "next/link";

import { UserButton } from "@/features/auth/components/user-button";

import Image from "next/image";
import logo from "../../../public/movesquares.png";
interface StandaloneLayoutProps {
  children: React.ReactNode;
}

const StandaloneLayout = ({ children }: StandaloneLayoutProps) => {
  return (
    <main className=" min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center h-[73px]">
          <Link href="/">
            <Image
              width={100}
              height={100}
              src={logo}
              alt="Move Squares logo"
            />
          </Link>
          <UserButton />
        </nav>
        <div className="flex flex-col items-center justify-center py-4">
          {children}
        </div>
      </div>
    </main>
  );
};

export default StandaloneLayout;
