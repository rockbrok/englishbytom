import { FAQ } from "@/components/faq";
import { ClassCards } from "@/components/classCards";
import { TestimonialCards } from "@/components/testimonialCards";

export default function Home() {
  return (
    <>
      <section className="section">
        <h3 className="h3">Elegí la clase que mejor se adapte a vos</h3>
        <ClassCards />
        {/* <ClassCards types={["unt", "grupales"]} /> */}
      </section>
      {/* <section className="section">
        <h3 className="h3">Mi forma de enseñar</h3>
      </section> */}
      <section className="section">
        <h3 className="h3">Preguntas Frecuentes</h3>
        <FAQ />
      </section>
      <section className="section">
        <h3 className="h3">Testimoniales</h3>
        <TestimonialCards />
      </section>
    </>
  );
}