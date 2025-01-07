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
      <AlertTriangle />
      <p className="text-sm text-muted-foreground">
        Something went wrong fetching your dashboard!
      </p>
      <Button asChild variant="secondary">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
