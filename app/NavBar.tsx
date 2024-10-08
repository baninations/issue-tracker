"use client";

import { navLinks } from "@/consts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

// {`${
//     link.href === pathname ? "text-zinc-800" : "text-zinc-400"
//   }  hover:text-zinc-700`}

const NavBar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex space-x-4 pl-4 border-b h-14 items-center mb-4">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li
            className={classnames({
              "text-zinc-800": link.href === pathname,
              "text-zinc-400": link.href !== pathname,
              "hover:text-zinc-700": true,
            })}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
