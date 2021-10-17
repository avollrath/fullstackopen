import React, { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  if (good > 0 || neutral > 0 || bad > 0)
    return (
      <table>
        <theader>
          <h1>Statistics</h1>
        </theader>
        <tbody>
          <StatisticLine
            text="good"
            value={good}
          />
          <StatisticLine
            text="neutral"
            value={neutral}
          />
          <StatisticLine
            text="bad"
            value={bad}
          />
          <StatisticLine
            text="all"
            value={good + bad + neutral}
          />
          <StatisticLine
            text="average score"
            value={(good - bad) / (good + bad + neutral)}
          />
          <StatisticLine
            text="positive"
            value={(good / (good + neutral + bad) * 100)}
          />
        </tbody>
      </table>
    )
  else return (
    <div>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button
        onClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        onClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        onClick={() => setBad(bad + 1)}
        text='bad'
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App