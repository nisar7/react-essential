import { useState, useRef } from "react";

export default function Player() {

  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("")



  function handleNameButtonClick() {

    setEnteredPlayerName(playerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {`${playerName?.current?.value ? enteredPlayerName : "unknown entity"}`}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleNameButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
