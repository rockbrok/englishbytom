export const TestimonialCards = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Card
        quote={"Lo que más me gusta es lo claro que explica. En cada clase me llevo algo que me sirve en el momento."}
        name={"Matías Herrera"}
        date={"mayo 2025"}
      />
      <Card
        quote={"Empecé sin saber nada y ya me estoy animando a hablar. Las clases vienen siendo súper útiles."}
        name={"Carla López"}
        date={"julio 2025"}
      />
    </div>
  )
}

const Card = ({ ...props }: any) => {
  return (
    <div className="flex flex-col w-full p-4 gap-2 border border-[#E5E7EB]">
      <q>{props.quote}</q>
      <div className="flex flex-row w-full justify-between">
        <small className="text-xs text-[#64748B]">{props.name}</small>
        <small className="text-xs text-[#64748B]">{props.date}</small>
      </div>
    </div>
  )
}