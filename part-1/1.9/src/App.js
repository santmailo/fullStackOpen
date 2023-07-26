import React, { useState } from 'react';
import Button from './components/button';
import Statistic from './components/statistic';


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
    return <Statistic good={good} neutral={neutral} bad={bad} />
  }

}

export default App;
