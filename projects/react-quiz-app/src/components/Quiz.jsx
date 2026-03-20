import Question from "./Question"
import Card from "./Card"
import StartScreen from "./StartScreen"
import EndScreen from "./EndScreen"
import { useContext, useEffect } from "react"
import { QuizContext } from "../context/QuizContext"
import Header from "./Header"

export default function Quiz() {
    const { currentScreen, handleStartQuizTimer, handleStopQuizTimer } = useContext(QuizContext)

    useEffect(() => {

        if (currentScreen == "quiz") {
            handleStartQuizTimer()
        }
        return (() => {
            handleStopQuizTimer()
        })

    }, [currentScreen])



    return (
        <>
            {currentScreen == "quiz" && <Header></Header>}
            <div className="flex items-center justify-center h-screen bg-gray-100">

                {currentScreen == "quiz" &&
                    <>

                        <Card>
                            <Question></Question>
                        </Card>
                    </>
                }


                {currentScreen == "start" &&
                    <Card>
                        <StartScreen ></StartScreen>
                    </Card>}


                {currentScreen == "end" &&
                    <Card>
                        <EndScreen ></EndScreen>
                    </Card>}

            </div>
        </>
    )
}