"use client";

import { Loader } from "lucide-react";

const LoadingPage = () => {
  return (
    <div
      className="h-screen flex flex-col
     items-center justify-center "
    >
      <Loader className="siz-6 animate-spin text-muted-foreground" />
    </div>
  );
};

export default LoadingPage;
