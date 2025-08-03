import { FAQ } from "@/components/faq";
import { ClassCards } from "@/components/classCards";
import { TestimonialCards } from "@/components/testimonialCards";

export default function Home() {
  return (
    <>
      <section className="flex flex-col gap-y-4">
        <h3 className="text-[#334155] font-medium text-xl">Elegí la clase que mejor se adapte a vos</h3>
        <ClassCards />
        {/* <ClassCards types={["unt", "grupales"]} /> */}
      </section>
      {/* <section>
        <h3 className="text-[#334155] font-medium text-xl">Mi forma de enseñar</h3>
      </section> */}
      <section className="flex flex-col gap-y-4">
        <h3 className="text-[#334155] font-medium text-xl">Preguntas Frecuentes</h3>
        <FAQ />
      </section>
      <section className="flex flex-col gap-4">
        <h3 className="text-[#334155] font-medium text-xl">Testimoniales</h3>
        <TestimonialCards />
      </section>
    </>
  );
}