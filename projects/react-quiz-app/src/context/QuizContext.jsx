import { createContext } from "react";
import { useState, useRef } from "react"
import { QUESTIONS } from "../data/Question";

export const QuizContext = createContext({
    currentQuestionIndex: "",
    currentScreen: "start",
    answerList: {},
    currentQuestion: {},
    isFirst: true,
    isLast: false,
    quizTime: null,
    quizTimer:null ,
    handleNextQuestion: () => { },
    handlePrevQuestion: () => { },
    handleSelectAnswer: () => { },
    handleStartQuizButton: () => { },
    handleCompleteQuiz: () => { },
    handleReset: () => { },
    handleStartQuizTimer: () => {},
    handleStopQuizTimer: () => {}
})

export function QuizContextProvider({ children }) {
    const [quizTime, setQuizTime] = useState(10000)

    const quizTimer = useRef()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const [currentScreen, setCurrentScreen] = useState("start")

    const [answerList, setAnswerList] = useState({})

    const currentQuestion = QUESTIONS[currentQuestionIndex]

    const isFirst = currentQuestionIndex == 0 ? true : false;

    const isLast = currentQuestionIndex == (QUESTIONS.length - 1) ? true : false;

    const handleStartQuizTimer = () => {
        quizTimer.current = setInterval(() => {
            setQuizTime((preVal) => preVal - 10)
        }, 10);
    }

    const handleStopQuizTimer = () => {
        clearInterval(quizTimer.current)
        setQuizTime(10000)
    }


    const handleNextQuestion = () => {
        setCurrentQuestionIndex(preVal => {
            if (preVal >= 0 && preVal < (QUESTIONS.length)) {
                return preVal + 1
            }
        })
    }

    const handlePrevQuestion = () => {
        setCurrentQuestionIndex(preVal => {
            if (preVal >= 0 && preVal < (QUESTIONS.length)) {
                return preVal - 1
            }
        })
    }

    const handleSelectAnswer = (value, questionId) => {
        setAnswerList((preVal) => {
            const updateVal = { ...preVal }
            updateVal[questionId] = value
            return updateVal
        })

    }

    const handleStartQuizButton = () => {
        setCurrentScreen("quiz")
    }

    const handleCompleteQuiz = () => {
        setCurrentScreen("end")
         handleStopQuizTimer()
        setQuizTime(10000)
    }

    const handleReset = () => {
        setCurrentScreen("start")
        setCurrentQuestionIndex(0)
        setAnswerList({})
        handleStopQuizTimer()
        setQuizTime(10000)

    }

    const value = {
        currentQuestionIndex,
        currentScreen,
        answerList,
        currentQuestion,
        isFirst,
        isLast,
        quizTime,
        quizTimer,
        handleNextQuestion,
        handlePrevQuestion,
        handleSelectAnswer,
        handleStartQuizButton,
        handleCompleteQuiz,
        handleReset,
        handleStartQuizTimer,
        handleStopQuizTimer
    }

    return (
        <>
            <QuizContext.Provider value={value}>
                {children}
            </QuizContext.Provider>
        </>)
}