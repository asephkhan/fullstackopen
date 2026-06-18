import { useState } from 'react'
import Button from './Button'

const Statistics = ({good, neutral, bad}) => {

   let total = good + bad + neutral

  let average = (good - bad)/total

  let positive = good/total * 100 

return ( 

  <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
  </>
  
)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () =>{
      setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

 

  

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={handleGood}/> 
      <Button text={"neutral"} onClick={handleNeutral} /> 
      <Button text={"bad"} onClick={handleBad} /> 
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App