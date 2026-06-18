import { useState } from "react";
import Button from "./Button";
import StatisticsLine from "./StatisticsLine";

const Statistics = ({ good, neutral, bad }) => {
  let total = good + bad + neutral;

  let average = (good - bad) / total;

  let positive = (good / total) * 100;

  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <StatisticsLine text={"good"} value={good}/>
        <StatisticsLine text={"neutral"} value={neutral}/>
        <StatisticsLine text={"bad"} value={bad}/>
        <StatisticsLine text={"total"} value={total}/>
        <StatisticsLine text={"average"} value={average}/>
        <StatisticsLine text={"positive"} value={positive}/>
      </>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={handleGood} />
      <Button text={"neutral"} onClick={handleNeutral} />
      <Button text={"bad"} onClick={handleBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
