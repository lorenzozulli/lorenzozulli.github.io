import './style.css';

interface TypemeProps {
  name: string,
  machineName: string,
  separator: string,
  cursor: string,
  text: string
}

export const Typeme = (
  {
    name,
    machineName,
    separator,
    cursor,
    text
  }: TypemeProps
) => {
  return (
    <div className="typeme">
      <span className="text-secondary">{ name }@{ machineName } </span>
      <span>{ separator }</span>
      <span>{cursor} </span>
      { text }
    </div>
  )
}
