import { useState } from "react"
import GameBoard from "./components/GameBoard"
import PlayerList from "./components/PlayerList"
import Logs from "./components/Logs"
import GameOver from "./components/GameOver";

function calculateWinner(board) {
  const winningCombinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];


  for (const [a, b, c] of winningCombinations) {

    const first = board[a[0]][a[1]];
    if (
      first &&
      first === board[b[0]][b[1]] &&
      first === board[c[0]][c[1]]
    ) {
      return first;
    }
  }

  return null;
}
function App() {

  const [gameState, setGameState] = useState([]);
  const gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  for (const move of gameState) {
    gameBoard[move.row][move.column] = move.player;
  }

  const winnerSymbol = calculateWinner(gameBoard)

  const isDraw = !winnerSymbol && gameState.length === 9

  function handleResetButton() {
    setGameState([])
  }

  function handleSquareClick(rowIndex, columnIndex) {
    setGameState((prevState) => {
      const squareAlreadyTaken = prevState.some(
        (move) =>
          move.row === rowIndex &&
          move.column === columnIndex
      );

      if (squareAlreadyTaken) return prevState;

      const result = calculateWinner(gameBoard)
      if (result) {
        return prevState
      }

      const currentPlayer =
        prevState.length % 2 === 0 ? "X" : "O";

      return [
        {
          player: currentPlayer,
          row: rowIndex,
          column: columnIndex,
        },
        ...prevState,
      ];
    })
  }

  return (
    <main>
      <section id="game-container">

        <PlayerList isDraw={isDraw} activeSymbol={gameState.length > 0 ? gameState[0].player : "X"}></PlayerList>


        {!winnerSymbol && <GameBoard onSelect={handleSquareClick} gameBoard={gameBoard}></GameBoard>}


      </section>
      <Logs gameState={gameState}></Logs>
      {(winnerSymbol || isDraw) && <GameOver handleResetButton={handleResetButton} winnerSymbol={winnerSymbol} isDraw={isDraw}></GameOver>}
    </main>
  )
}

export default App
