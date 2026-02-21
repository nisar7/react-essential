export default function GameOver({ winnerSymbol, handleResetButton, isDraw }) {
    return (<>
        <div id="game-over">
           {winnerSymbol && <h2>You Won {winnerSymbol}</h2>}
           {isDraw && <h2>Match Draw!</h2>}

            <p><button onClick={handleResetButton}>Rematch </button> </p>
        </div>
    </>)
}