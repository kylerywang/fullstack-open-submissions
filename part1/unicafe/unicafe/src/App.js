import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine =({text, value}) =>{
  return (
    <tr>
      <td>{text}</td> 
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral, total}) => {
  const average = (good - bad) / (total)
  const positive = good/total
  return(
    <table>
      <tbody>
        <StatisticLine text="Good" value ={good} />
        <StatisticLine text="Neutral" value ={neutral} />
        <StatisticLine text="Bad" value ={bad} />
        <StatisticLine text="Average" value ={average} />
        <StatisticLine text="Positive" value ={positive} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad

  // const calculateAverage = () => (good - bad) / (good+bad+neutral)



  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() =>setGood(good+1)} text="good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      {total !=0 && 
        <>
          
          <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </>
      }
    </div>
  )
}

export default App