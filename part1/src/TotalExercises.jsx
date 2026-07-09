const TotalExercises = (props) => {
  const sum = props.parts.reduce((acc, curr) => acc + curr.exercises, 0);

  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  );
};

export default TotalExercises;
