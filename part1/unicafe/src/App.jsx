import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
     <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
    </>
  );
};
const Statistics = ({ good, neutral, bad }) => {

  const totalFeeds = good + neutral + bad;
  const average = (good - bad) / totalFeeds || 0;
  const positivePercentage = ((good / totalFeeds) * 100).toFixed(2) || 0;
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={totalFeeds} />
        <StatisticLine text="Average" value={average.toFixed(2)} />
        <StatisticLine text="Positive" value={`${positivePercentage}%`} />
      </tbody>
    </table>
  );
};

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleGoodButton = () => {
    setGood(good + 1);
  
  };
  const handleNeutralButton = () => {
    setNeutral(neutral + 1);
   
  };
  const handleBadButton = () => {
    setBad(bad + 1);
   
  };

  return (
    <div>
      <h2> give feedback</h2>
      <Button handleClick={handleGoodButton} text="good"/>
      <Button handleClick={handleNeutralButton} text="neutral"/>
      <Button handleClick={handleBadButton} text="bad" />


      <h2> Statistics</h2>
      {good + neutral + bad > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
        
        />
      ) : (
        <p>No feedback</p>
      )}
    </div>
  );
};

export default App;
