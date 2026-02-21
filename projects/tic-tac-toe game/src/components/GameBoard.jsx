

export default function GameBoard({ onSelect, gameBoard }) {

    return (
        <>
            <ol id="game-board">
                {gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => onSelect(rowIndex, colIndex)}>{col}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))}
            </ol>
        </>
    )
}