/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { navbarItems } from "./Navbar.items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const ResponsiveMenu = ({ openMenu }: any) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 md:top-32 lg:hidden left-0 w-full h-80 z-20"
        >
          <div className="bg-[#25c0c0] rounded-3xl p-10">
            <ul className="flex flex-col gap-6 text-base font-semibold uppercase text-white text-center mb-6 p-5 rounded-4xl">
              {navbarItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={`inline-block ${
                      pathname === item.link
                        ? "text-white font-bold border-b-2 pb-1 border-white"
                        : ""
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* products searchbar inner */}
            <div className="flex justify-center">
              <div className="w-80 flex gap-4 items-center px-4 py-3 bg-slate-100 rounded-full border-2 border-[#25c0c0]">
                <Search className="text-[#25c0c0]" />
                <input
                  className="w-full border-none outline-0 text-slate-700"
                  type="search"
                  placeholder="Search smart gadget"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
