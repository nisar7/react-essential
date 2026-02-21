import Player from './components/Player.jsx';

import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">

        <TimerChallenge title="Beginner" targetTime={5}></TimerChallenge>

        <TimerChallenge title="Intermediate" targetTime={10}></TimerChallenge>

        <TimerChallenge title="Hard" targetTime={15}></TimerChallenge>

        <TimerChallenge title="Pro" targetTime={20}></TimerChallenge>
      </div>
    </>
  );
}

export default App;
