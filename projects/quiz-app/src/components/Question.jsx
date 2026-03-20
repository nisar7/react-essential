import question from "../data/question"
import { useMemo, useState, useRef } from "react"
import Timer from "./Timer";
import Option from "./Option";

export default function Question({ currentQuestionIndex, handleSelectOption }) {

    // const [selectedOption, setSelectedOption] = useState("")

    let selectedOptionRef = useRef("")
    const [phase, setPhase] = useState("waiting")

    const currentQuestion = question[currentQuestionIndex]

    const shuffledAns = useMemo(() => {
        return [...currentQuestion?.answers].sort(() => Math.random() - 0.5)
    }, [currentQuestionIndex])

    const handleOptionClicked = (option) => {
        selectedOptionRef.current = option

    }

    const handleTimerTimeOut = () => {

        if (phase === "waiting") {
            setPhase("result")
        }

        if (phase == "result") {
            handleSelectOption(currentQuestion.id, selectedOptionRef.current || "")
        }
    }

    return <>
        {(phase === "waiting") && <Timer
            key={currentQuestionIndex}
            time={10000}
            onTimeComplete={handleTimerTimeOut}

        >
        </Timer>}



        {phase === "result" && <Timer
            key={currentQuestionIndex}
            time={2000}
            onTimeComplete={handleTimerTimeOut}

        >
        </Timer>}

        <h2>{currentQuestion?.text}</h2>
        <Option
            selectedOption={selectedOptionRef.current}
            phase={phase}
            options={shuffledAns}
            handleSelectOption={handleOptionClicked}
            currentQuestionIndex={currentQuestionIndex}
        ></Option>
    </>
}