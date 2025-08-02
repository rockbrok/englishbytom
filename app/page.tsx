import { FAQ } from "@/components/faq";
import { ClassCards } from "@/components/classCards";
import { TestimonialCard } from "@/components/testimonialCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <section className="flex flex-col gap-y-4">
        <h3 className="text-[#334155] font-medium text-xl">Elegí la clase que mejor se adapte a vos</h3>
        <ClassCards />
        {/* <ClassCards types={["unt", "grupales"]} /> */}
      </section>
      {/* <section>
        <h3 className="text-[#334155] font-medium text-xl">Mi forma de enseñar</h3>
      </section> */}
      <section>
        <h3 className="text-[#334155] font-medium text-xl">Preguntas Frecuentes</h3>
        <FAQ />
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="text-[#334155] font-medium text-xl">Testimoniales</h3>
        <div className="flex flex-row gap-4">
          <TestimonialCard
            quote={"Lo que más me gusta es lo claro que explica. En cada clase me llevo algo que me sirve en el momento."}
            name={"Matías Herrera"}
            date={"mayo 2025"}
          />
          <TestimonialCard
            quote={"Empecé sin saber nada y ya me estoy animando a hablar. Las clases vienen siendo súper útiles."}
            name={"Carla López"}
            date={"julio 2025"}
          />
        </div>
      </section>
    </div>
  );
}