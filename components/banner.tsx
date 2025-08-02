import Image from 'next/image'
import Link from 'next/link'

export default function Banner() {
  return (

    <div className="relative flex w-full h-[16rem] image-overlay-container items-center justify-center">
      <Image
        src="/banner.jpg"
        style={{ objectFit: "cover" }}
        className="opacity-25"
        sizes="100vw"
        fill
        alt="Picture of the author"
      />
      <div className='z-40 flex flex-col gap-4 w-[1015px] px-2'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-5xl font-bold text-white'>Lográ tus objetivos de inglés</h1>
          <h2 className='text-xl text-white'>Ya seas estudiante o profesional, estoy para ayudarte a avanzar</h2>
        </div>
        <Link href="/contact" className="py-2 px-4 bg-[#FFF951] w-fit rounded-md">Consultame</Link>
      </div>
    </div>


  )
}