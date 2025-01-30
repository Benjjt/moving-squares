"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import identDark from "../../public/identDark.svg";
import identLight from "../../public/identLight.svg";

const ThemeLogo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" ? (
        <Image
          src={identLight}
          width={75}
          height={10}
          alt="move squares logo"
        />
      ) : (
        <Image src={identDark} width={75} height={10} alt="move squares logo" />
      )}
    </>
  );
};

export default ThemeLogo;
