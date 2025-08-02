import Image from "next/image";
import { Button } from "@/components/ui/button"
import Nav from "@/components/nav";
import Header from "@/components/header";

import Link from "next/link";
import { FAQ } from "@/components/faq";

import { Users, CalendarCheck2, GraduationCap, User, Edit } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <section className="flex flex-col gap-y-4">
        <h3 className="text-[#334155] font-medium text-xl">Elegí la clase que mejor se adapte a vos</h3>
        <div className="flex flex-row gap-4 w-full">
          <Card
            title_icon={<Users color="black" size={24} />}
            title={"Cursos Grupales"}
            text={"Clases dinámicas, accesibles y motivadoras de mejorar tu inglés junto a otras personas con intereses similares."}
            note_icon={<CalendarCheck2 color="#5E5E5E" size={16} />}
            note={"Nuevos grupos cada semana"}
          />
          <Card
            title_icon={<GraduationCap color="black" size={24} />}
            title={"Cursos para la UNT"}
            text={"Estas clases son enfocadas en reforzar lo que ves en clase, pero en un entorno más práctico y participativo."}
            note_icon={<Edit color="#5E5E5E" size={16} />}
            note={"Contenidos alineados con la facultad"}
          />
          <Card
            title_icon={<User color="black" size={24} />}
            title={"Clases Individuales"}
            text={"Se adaptan completamente a tus objetivos: ya sea mejorar la conversación, preparar un examen..."}
            note_icon={<CalendarCheck2 color="#5E5E5E" size={16} />}
            note={"Horario flexible"}
          />
        </div>
      </section>
      <section>
        <h3 className="text-[#334155] font-medium text-xl">Mi forma de enseñar</h3>
      </section>
      <section>
        <h3 className="text-[#334155] font-medium text-xl">Preguntas Frecuentes</h3>
        <FAQ />
      </section>
      <section>
        <h3 className="text-[#334155] font-medium text-xl">Testimoniales</h3>
       
      </section>
    </div>
  );
}

const Card = ({ ...prop }: any) => {
  return (
    <div className="flex flex-col bg-[#DFE0FF] rounded-md px-4 py-4 w-full gap-y-4 justify-between">
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-2">
          {prop.title_icon}
          <h4 className="font-semibold text-lg">{prop.title}</h4>
        </div>
        <p>{prop.text}</p>
        <div className="flex flex-row gap-x-2 items-center">
          {prop.note_icon}
          <p className="text-[#5E5E5E] text-sm">{prop.note}</p>
        </div>
      </div>
      <Link href="/" className="py-2 px-4 bg-[#2C7AC3] rounded-md text-white w-fit">Saber más</Link>
    </div>
  )
}