const Part = (props) => {
  return(
   <>
   {props.parts.map((part)=> {
    return(
     <><p>{part.name} {part.exercises}</p></>
    )
})}
     
   </>
  )

};

export default Part;
