"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import NavBurgerMobile from "./navBurgerMobile";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const path = usePathname();

  function IsLink(href: string) {
    return path.endsWith(href);
  }

  return (
    <nav className="flex justify-between items-center bg-white px-6 lg:px-52 py-4 lg:py-4 border">
      <h3 className="font-medium text-black text-xl tracking-[.5rem]">
        BINUATAN
      </h3>
      <div className="lg:flex gap-8 hidden">
        <Button
          asChild
          variant={"link"}
          className={cn("p-4 w-full", IsLink("/") ? "text-orange-500" : "")}
        >
          <Link href={"/"}>Home</Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn(
            "p-4 w-full",
            IsLink("products") ? "text-orange-500" : ""
          )}
        >
          <Link href={"products"}>Products</Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn("p-4 w-full", IsLink("about") ? "text-orange-500" : "")}
        >
          <Link href={"about"}>About Us</Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn("p-4 w-full", IsLink("news") ? "text-orange-500" : "")}
        >
          <Link href={"news"}>News</Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn(
            "p-4 w-full",
            IsLink("contact") ? "text-orange-500" : ""
          )}
        >
          <Link href={"contact"}>Contact Us</Link>
        </Button>
      </div>

      <NavBurgerMobile />
    </nav>
  );
}
