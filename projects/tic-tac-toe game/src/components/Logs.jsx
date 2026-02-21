export default function Logs({ gameState }) {
    return (
        <>
            <ol id="log">
                {
                    gameState.map((game, index) => {
                        return <li index>

                            {`Player ${game.player} clicked on ${game.row} ,${game.column}  `}
                        </li>
                    })
                }

            </ol>
        </>
    )
}