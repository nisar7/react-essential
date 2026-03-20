import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import { QuizContext } from "../context/QuizContext"
import { ANSWERS } from "../data/Question"

export default function EndScreen({ }) {

    const { handleReset, answerList } = useContext(QuizContext)
    console.log("==>>", answerList);
    
    const [score, setScore] = useState(0)

    useEffect(() => {
        const total = ANSWERS.reduce((acc, ans) => {
            return answerList[ans.questionId] === ans.answer ? acc + 1 : acc;
        }, 0);

        setScore(total);
    }, []);





    return (
        <>
            <Card>
                <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-md w-full">

                    <h1 className="text-3xl font-bold mb-4 text-gray-800">
                        Quiz Completed
                    </h1>

                    <p className="text-gray-600 mb-6">
                        Your Score is {score} Out Of {ANSWERS.length}
                    </p>
                    <button
                        onClick={handleReset}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Test it Again
                    </button>


                </div>
            </Card>

        </>)
}