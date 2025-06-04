"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import AppLogo from "../../atoms/AppLogo/AppLogo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="relative flex items-center justify-between px-6 py-4 shadow-sm bg-white border-b">
      <AppLogo />

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-6 text-base font-medium text-gray-700">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">About us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/listings">Listings</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/favorites">Favorites</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden z-50 text-gray-700"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t shadow-md z-40 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-4 text-base font-medium text-gray-700">
            <li>
              <Link href="/about" onClick={toggleMobileMenu} className="w-full">
                About us
              </Link>
            </li>
            <li>
              <Link href="/listings" onClick={toggleMobileMenu}>
                Listings
              </Link>
            </li>
            <li>
              <Link href="/favorites" onClick={toggleMobileMenu}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Future Auth Buttons */}
      {/* <div className="hidden md:flex gap-3">
        <Button variant="outline">Login</Button>
        <Button>Sign up</Button>
      </div> */}
    </header>
  );
}
