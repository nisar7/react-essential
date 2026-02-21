import Player from "./Player"

export default function PlayerList({ activeSymbol }) {
    return (
        <>
            
            <ol id="players" className="highlight-player">
                <Player activeSymbol={activeSymbol} initalPlayerName="Player 1" playerSybmol="X"></Player>
                <Player activeSymbol={activeSymbol} initalPlayerName="Player 2" playerSybmol="O"></Player>
            </ol>
        </>


    )
}

