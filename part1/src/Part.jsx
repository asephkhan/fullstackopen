const Part = (props) => {
  return (
    <>
      {props.parts.map((part) => {
        return <p key={part.id}>{part.name} {part.exercises}</p>
      })}
    </>
  )
}

export default Part;
