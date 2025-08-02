import * as React from "react"
import Link from "next/link"
import Banner from "./banner"

export default function Header() {
  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex w-[1015px] py-4 px-2">
        <nav className="flex flex-row justify-between w-full">
          <h6 className="">English by Tom</h6>
          <ul className="flex flex-row gap-4">
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