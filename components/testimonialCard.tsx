export const TestimonialCard = ({ ...props }: any) => {
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