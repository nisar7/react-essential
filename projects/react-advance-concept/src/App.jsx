import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfigureCounter from './components/ConfigureCounter.jsx';
import { log } from './log.js';

function App() {
  log('<App /> rendered');
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetClick(enteredNumber) {
    setChosenCount(enteredNumber);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onHandleClick={handleSetClick}></ConfigureCounter>
       
        <Counter initialCount={chosenCount} key={chosenCount} />

        
      </main>
    </>
  );
}

export default App;
