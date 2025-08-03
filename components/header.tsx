import * as React from "react"
import Link from "next/link"
import { Button } from "./ui/button";
import Banner from "./banner"
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex responsive-container py-4 justify-between items-center">
        <h6>English by Tom</h6>

        <nav>
          <Menu color="black" size={24} className="flex md:hidden" />
          <ul className="hidden md:flex flex-row items-center gap-2">
            <li>
              <Link href="/" className="nav-link">Inicio</Link>
            </li>
            <li>
              <Link href="/" className="nav-link">Sobre Mi</Link>
            </li>
            {/* <li>
              <Link href="/" className="py-2 px-4">Blog</Link>
            </li> */}
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Clases Online</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] p-1">
                        <li>
                          <Link
                            href="#"
                            className="shadcn-navigation-menu-link"
                          >
                            Cursos Grupales
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="shadcn-navigation-menu-link"
                          >
                            Cursos para la UNT
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="#"
                            className="shadcn-navigation-menu-link"
                          >
                            Clases Individuales
                          </Link>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <Button asChild variant="yellow" className="w-fit">
                <Link href="/contact" >Contacto</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
      <Banner />
    </div>
  )
}




