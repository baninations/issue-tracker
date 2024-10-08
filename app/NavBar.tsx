import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  const navLinks = [
    {
      href: "/",
      label: "Dashboard",
    },
    {
      href: "/issues",
      label: "Issues",
    },
  ];
  return (
    <nav className="flex space-x-4 pl-4 border-b h-14 items-center mb-4">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-4">
        {navLinks.map((link) => (
          <li className="text-zinc-400 hover:text-zinc-700" key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
