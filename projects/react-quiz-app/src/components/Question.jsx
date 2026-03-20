import { useContext, useEffect } from "react"
import Navigation from "./Navigation"
import Option from "./Option"
import { QuizContext } from "../context/QuizContext"



export default function Question({ }) {
    const { currentQuestion: question, handleStartQuizTimer, handleStopQuizTimer, handleNextQuestion, quizTime, isLast, handleCompleteQuiz } = useContext(QuizContext)
    useEffect(() => {
        if (quizTime < 0) {
            handleStopQuizTimer()
            handleNextQuestion()
            handleStartQuizTimer()
        }

        if (isLast) {
            handleCompleteQuiz()
        }

    }, [quizTime])

    return (
        <>
            <h5 className="mb-4 text-xl font-medium text-body">{question?.question}</h5>

            {question?.options?.map((option, index) => {
                return <Option questionId={question.id} key={index} value={option} ></Option>
            })}

            <Navigation></Navigation>
        </>
    )
}