"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="h-screen flex flex-col
     items-center justify-center gap-y-2"
    >
      <AlertTriangle className="siz-6 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">Something went wrong</p>
      <Button asChild variant="secondary">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
