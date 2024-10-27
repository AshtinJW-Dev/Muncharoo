import React from "react";

import egg from "../public/assets/images/favicon.png";
import { Input } from "@/components/ui/input"; // Adjust the path if needed
import { Button } from "@/components/ui/button"; // Adjust the path if needed
import Link from "next/link"

import {
  NavigationMenu,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,

} from "@/components/ui/navigation-menu"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center d-flex flex-col">
          <Image src={egg} width="80" height="80" alt="Logo" className="bg-danger rounded"/>
          <h1 className="title-text">Muncharoo</h1>
        </div>
      
        <div className="flex flex-grow mx-4">
          <form className="flex flex-grow" role="search">
            <Input
              className="flex-grow border border-gray-300 rounded-l-md p-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="outline" type="submit" className="rounded-r-md p-2">
              Search
            </Button>
          </form>
        </div>

        <div className="flex space-x-4 text-gray-600">
          <a href="#!" aria-label="Instagram">
            <i className="bi bi-instagram text-2xl hover:text-blue-600"></i>
          </a>
          <a href="#!" aria-label="Facebook">
            <i className="bi bi-facebook text-2xl hover:text-blue-600"></i>
          </a>
          <a href="#!" aria-label="Pinterest">
            <i className="bi bi-pinterest text-2xl hover:text-blue-600"></i>
          </a>
          <a href="#!" aria-label="YouTube">
            <i className="bi bi-youtube text-2xl hover:text-blue-600"></i>
          </a>
        </div>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem >
            <Link href="/my-munchies" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                My Munchies
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/top-recipes" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Top Recipes
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>

            <Link href="/categories" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Categories
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>

  );
}
