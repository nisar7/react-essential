import { useState } from "react"

export default function Player({ initalPlayerName, playerSybmol, activeSymbol}) {

    const [isEditing, setIsEditing] = useState(false)

    const [playerName, setPlayerName] = useState(initalPlayerName)


    


    function handleEditClick() {
        setIsEditing((editing) => !editing)
    }


    function handlePlayerNameChange(event) {
        setPlayerName(event?.target.value)

    }

    let btnCaption = <button onClick={handleEditClick}> Edit</button>

    if (isEditing) {
        btnCaption = <button onClick={handleEditClick}> Save</button>
    }
    return (
        <>
            
            <li className={playerSybmol === activeSymbol ? "active" : ""}>
                {!isEditing && <span className="player-name" >{playerName}</span>}

                {isEditing && <input type="text" value={playerName} onChange={handlePlayerNameChange} />}

                <span className="player-symbol">{playerSybmol}</span>


            </li>

            {btnCaption}

        </>
    )
}