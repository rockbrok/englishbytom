export const ClassDetailCard = ({ ...props }: any) => {
  return (
    <div className="border p-4 flex flex-col items-center justify-center gap-2">
      {props.icon}
      <strong className="text-center text-wrap">{props.text}</strong>
    </div>
  )
}