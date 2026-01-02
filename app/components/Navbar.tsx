"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w8xl mx-18 px-35 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-white"
        >
          Yasir <span className="text-blue-500">Tella</span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-18">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-sm transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-blue-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
