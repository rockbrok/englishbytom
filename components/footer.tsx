import * as React from "react"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center bg-[#869FE2] text-white">
      <footer className="flex flex-grow w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl py-4 px-2 justify-between">
        <h6>English by Tom</h6>
        <div className="flex flex-col gap-2">
        <div className="flex flex-row">
          <a href="">
            <Image
              src="/Youtube.svg"
              height="32"
              width="32"
              quality={100}
              unoptimized={true}
              alt="English by Tom Youtube channel"
            />
          </a>
          <a href="">
            <Image
              src="/Instagram.svg"
              height="32"
              width="32"
              quality={100}
              unoptimized={true}
              alt="English by Tom Youtube channel"
            />
          </a>
          <a href="">
            <Image
              src="/Facebook.svg"
              height="32"
              width="32"
              quality={100}
              unoptimized={true}
              alt="English by Tom Youtube channel"
            />
          </a>
        </div>
        <small className="text-xs">© Copyright 2025 EnglishbyTom.com</small>
        </div>
      </footer>
    </div>
  )
}