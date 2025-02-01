"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/movesquares.png";
import { Button } from "@/components/ui/button";
interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  return (
    <div className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image height={100} width={100} src={logo} alt="Move Squares logo" />
          <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
            <Button variant="secondary">
              {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Button>
          </Link>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
