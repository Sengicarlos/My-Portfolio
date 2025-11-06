"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn button import
import { useTheme } from "@/components/theme-provider"; // Corrected path

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/portfolio", label: "My Projects" },
    { href: "/contact", label: "Contact Me" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const { theme, setTheme } = useTheme(); // Shadcn theme hook
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
  <nav className="w-full bg-sidebar text-sidebar-foreground px-6 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/">MyPortfolio</Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-4 items-center">
          {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
                className={`px-3 py-2 rounded transition-all duration-200 ${
                activeLink === link.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-input/50 hover:px-4 hover:py-3"
              }`}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* CV Button */}
        <li>
          <Link href="/cv.pdf" target="_blank">
            <Button variant="default" className="ml-2">
              View CV
            </Button>
          </Link>
        </li>

        {/* Theme Toggle */}
        <li>
          <Button
            variant="outline"
            className="ml-2"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </Button>
        </li>
      </ul>

      {/* Mobile controls: theme toggle then hamburger */}
      <div className="md:hidden flex items-center gap-2">
        {/* Theme toggle shown on mobile before hamburger */}
        <Button variant="outline" className="p-2" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </Button>
        <button onClick={toggleMenu} className="focus:outline-none z-50" aria-label="Open menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-sidebar transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center">
          {links.map((link) => (
            <li key={link.href} className="border-b border-sidebar-border w-full text-center">
              <Link
                href={link.href}
                className={`block px-6 py-3 transition-all duration-200 ${
          activeLink === link.href ? "bg-primary text-primary-foreground" : "hover:bg-input/50"
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* CV Button */}
          <li className="border-b border-sidebar-border w-full flex justify-center mt-2">
            <Link href="/cv.pdf" target="_blank" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-3/4 text-center">
                View CV
              </Button>
            </Link>
          </li>

          {/* Theme Toggle */}
          <li className="flex justify-center mt-2 w-full">
            <Button variant="outline" onClick={toggleTheme}>
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
