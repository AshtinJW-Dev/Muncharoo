import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


import egg from "../public/assets/images/favicon.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src={egg} width={50} height={50} alt="Muncharoo Logo" />
          <h1 className="text-2xl font-bold text-gray-800">Muncharoo</h1>
        </div>

        {/* Search Bar */}
        <form className="flex flex-grow max-w-lg mx-6" role="search">
          <Input
            type="search"
            placeholder="Search recipes..."
            className="flex-grow border-gray-300 rounded-l-md px-3 py-2"
            aria-label="Search"
          />
          <Button variant="outline" type="submit" className="rounded-r-md px-4">
            Search
          </Button>
        </form>

        {/* Social Links */}
        {/* <div className="flex space-x-4 text-gray-700">
          <Link href="#!" aria-label="Instagram">
            <Instagram className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </Link>
          <Link href="#!" aria-label="Facebook">
            <Facebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
          </Link>
          <Link href="#!" aria-label="Pinterest">
            <Pinterest className="w-6 h-6 hover:text-red-500 transition-colors" />
          </Link>
          <Link href="#!" aria-label="YouTube">
            <Youtube className="w-6 h-6 hover:text-red-500 transition-colors" />
          </Link>
        </div> */}
      </div>

      {/* Navigation Menu */}
      <nav className="border-t border-gray-200">
        <NavigationMenu className="flex justify-center py-3">
          <NavigationMenuList className="flex space-x-6">
            {[
              { href: "/my-munchies", label: "My Munchies" },
              { href: "/top-recipes", label: "Top Recipes" },
              { href: "/categories", label: "Categories" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                
                  <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
                    {label}
                  </NavigationMenuLink>
                
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
