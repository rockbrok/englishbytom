export const ClassDetailCard = ({ ...props }: any) => {
  return (
    <div className="border p-4 flex flex-col items-center justify-center gap-2">
      {props.icon}
      <span className="text-center text-wrap text-sm">{props.text}</span>
    </div>
  )
}