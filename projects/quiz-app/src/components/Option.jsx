import { useState } from "react";
import question from "../data/question";

export default function Option({ options, handleSelectOption, currentQuestionIndex, selectedOption, phase }) {
const [selectedOptionVal , setSelectedOptionVal] = useState("")

    const onSelectOption = (option) => {
        setSelectedOptionVal(option)
        handleSelectOption(option)
    }

    return (<>
        {(!selectedOptionVal?.length && phase == "result") &&
            <h2 color="secondary">
                No option is Selected
            </h2>}
        {options?.map((option, index) => {
            const isSelected = selectedOptionVal == option ? true : false;
            const isCorrect = question[currentQuestionIndex]?.answers[0] === selectedOptionVal ? true : false;
            let cssClass = "";
            if (isSelected) {
                cssClass = "selected"
            }
            if (isSelected && isCorrect && phase != "waiting") {
                cssClass = "correct"
            }
            if (isSelected && !isCorrect && phase != "waiting") {
                cssClass = "wrong"
            }


            return <ul id="answers" key={currentQuestionIndex + "-" + index}>
                <li className="answer" >
                    <button disabled={phase === "result"} className={cssClass} onClick={() => { onSelectOption(option) }}>{option}</button>
                </li>
            </ul>
        })}
    </>)
}