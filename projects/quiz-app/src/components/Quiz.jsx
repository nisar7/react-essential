import question from "../data/question";
import Question from "./Question";
import Result from "./Result"
import { useState, useCallback } from "react"


export default function Quiz() {
    const [answerList, setAnswerList] = useState({})
    const isLastIndex = Object.keys(answerList).length === question.length;
    const currentQuestionIndex = Object.keys(answerList).length;

    const handleSelectOption = useCallback((questionId, option) => {
        setAnswerList((preVal) => {
            return {
                ...preVal,
                [questionId]: option
            }
        })
    }, [currentQuestionIndex])


    return (<>
        <div id="quiz">
            {!isLastIndex && <>
                <Question
                    key={currentQuestionIndex}
                    currentQuestionIndex={currentQuestionIndex}
                    handleSelectOption={handleSelectOption}
                ></Question>

            </>}
            {isLastIndex && <Result answerList={answerList}></Result>}
        </div>
    </>)
}