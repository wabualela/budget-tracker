"use client";
import React from "react";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <>
      <DesktopNavBar />
    </>
  );
}

const navLink = [
  { label: "Dashboard", url: "/" },
  { label: "Transactions", url: "/transactions" },
  { label: "Manage", url: "/manage" },
];
function DesktopNavBar() {
  return (
    <div className="hidden border-separate border-b bg-background md:block">
      <nav className="container flex items-center justify-between px-8">
        <div className="flex h-[80px] min-h-[60px]">
          <Logo />
          <div className="flex h-full">
            {navLink.map((link) => (
              <NavLink key={link.url} link={link.url} label={link.label} />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavLink({ link, label }: { link: string; label: string }) {
  const pathName = usePathname();
  const isActive = pathName === link;
  return (
    <div className="relative flex items-center">
      <Link
        href={link}
        className={cn(
          buttonVariants({ variant: "ghost" }),
            "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
            isActive && "text-foreground",
        )}
      >
              {label}
          </Link>
          {isActive && (
              <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
          )}
    </div>
  );
}

export default Navbar;
