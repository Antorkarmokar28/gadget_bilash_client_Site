"use client";
import React from "react";
import Logo from "../logo/Logo";
import {
  // CircleUserRound,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { navbarItems } from "./Navbar.items";
import { Badge } from "@/components/ui/badge";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* logo inner */}
          <Link href="/">
            <Logo />
          </Link>
          {/* products searchbar inner */}
          <div className="hidden w-80 lg:flex gap-4 items-center px-4 py-3 bg-slate-100 rounded-full border-2 border-[#25c0c0]">
            <Search className="text-[#25c0c0]" />
            <input
              className="w-full border-none outline-0 text-slate-700"
              type="search"
              placeholder="Search smart gadget"
            />
          </div>
          {/* menu inner */}
          <div className="hidden lg:block">
            <ul className="flex gap-3 xl:gap-6 text-base font-semibold uppercase">
              {navbarItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`inline-block transition-all duration-300 hover:text-[#25c0c0] ${
                      pathname === item.link
                        ? "text-[#25c0c0] font-bold border-b-2 pb-1 border-[#25c0c0]"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* icon inner */}
          <div className="flex items-center">
            {/* shopping bag */}
            <ShoppingBag className="text-[#25c0c0] font-bold" />
            <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums relative -top-4 right-1">
              8
            </Badge>
            <div className="flex gap-3 items-center">
              {/* profile */}
              {/* <CircleUserRound className="text-[#25c0c0] text-2xl font-bold cursor-pointer" /> */}
              <Link href="/">
                <Button variant={"outline"}>Login</Button>
              </Link>
              {/* theming inner */}
              <div>
                {/* theme */}
                <Button variant="outline" size="icon" onClick={toggleTheme}>
                  {theme === "dark" ? (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                  ) : (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </div>
          {/* mobile hamburger menu inner */}
          <div className="lg:hidden">
            <Menu className="text-4xl" onClick={() => setOpenMenu(!openMenu)} />
          </div>
        </div>
      </nav>
      {/* mobile sidebar inner */}
      <ResponsiveMenu openMenu={openMenu} />
    </>
  );
};

export default Navbar;
