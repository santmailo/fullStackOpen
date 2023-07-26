import React, { useState } from 'react';
import Button from './components/button';
import StatisticLine from './components/statistic';


function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);


  if(!good && !neutral && !bad) {
    return (
      <div className="App">
        <h1>Give Feedback</h1>
        <Button handleClick={handleGoodClick} text="Good" />
        <Button handleClick={handleNeutralClick} text="Neutral" />
        <Button handleClick={handleBadClick} text="Bad" />

      </div>
    );
  }
  
  else{
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={good+neutral+bad} />
            <StatisticLine text="Average" value={(good+neutral+bad)/3} />
            <StatisticLine text="Positive" value={((good) / (good+neutral+bad) )* 100} />
          </tbody>
        </table>
      </div>
    )
  }

}

export default App;
