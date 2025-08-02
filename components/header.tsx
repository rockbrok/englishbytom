import * as React from "react"
import Link from "next/link"
import Banner from "./banner"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex responsive-container py-4 justify-between">
        <h6>English by Tom</h6>
        
        <nav>
          <Menu color="black" size={24} className="flex md:hidden" />
          <ul className="hidden md:flex flex-row gap-4">
            <li>
              <Link href="/" className="py-2 px-4">Inicio</Link>
            </li>
            <li>
              <Link href="/" className="py-2 px-4">Sobre Mi</Link>
            </li>
            {/* <li>
              <Link href="/" className="py-2 px-4">Blog</Link>
            </li> */}
            <li>
              <Link href="/" className="py-2 px-4">Clases Online</Link>
            </li>
            <li>
              <Link href="/contact" className="py-2 px-4 bg-[#FFF951] rounded-md">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Banner />
    </div>
  )
}