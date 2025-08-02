import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Cómo puedo unirme a las clases online?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Cuáles son los niveles?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿Cómo es el proceso de nivelación?</AccordionTrigger>
        <AccordionContent>
          {`Todos los estudiantes, excepto aquellos que indican que nunca han estudiado inglés antes y no tienen habilidades en el idioma, deben pasar por el proceso de nivelación antes de su primera clase. \n
           Comenzando por una prueba de nivelación online, que se encarga de recavar el conocimiento que tenga el estudiante de la parte gramatical del lenguaje, para después agendar una prueba de comprensión oral y auditiva en el idioma. Esto me permite determinar con precisión las habilidades y necesidades específicas de cada estudiante.`}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


