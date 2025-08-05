"use client";
import Image from "next/image";
import React from "react";
import logo1 from "../../../assets/images/logo/logo1.png";
import logo2 from "../../../assets/images/logo/logo2.png";
import { useTheme } from "next-themes";
const Logo = () => {
  const { theme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <Image src={logo2} alt="Logo" width={250} height={150} />
      ) : (
        <Image src={logo1} alt="Logo1" width={250} height={150} />
      )}
    </div>
  );
};

export default Logo;
