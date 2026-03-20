import { useContext } from "react"
import Card from "./Card"
import { QuizContext } from "../context/QuizContext"

export default function StartScreen({ }) {
    const { handleStartQuizButton } = useContext(QuizContext)

    return (
        <>
            <Card>

                <h1 className="text-3xl font-bold mb-4 text-gray-800">
                    Quiz Application
                </h1>

                <p className="text-gray-600 mb-6">
                    Test your knowledge by answering the following questions.
                </p>

                <button
                    onClick={handleStartQuizButton}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Start Quiz
                </button>


            </Card>

        </>)
}