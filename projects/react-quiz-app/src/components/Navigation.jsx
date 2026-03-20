import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Navigation({ }) {

    const { handleNextQuestion, handlePrevQuestion, handleCompleteQuiz, isFirst, isLast } = useContext(QuizContext)

    const buttonClass =
        "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 " +
        "hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 " +
        "font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 " +
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gradient-to-r";

    return (
        <>

            <div className="inline-flex rounded-base shadow-xs space-x-2">



                <button
                    disabled={isFirst}
                    onClick={handlePrevQuestion} type="button" className={buttonClass}>
                    Previous</button>
                <button
                    disabled={isLast}
                    onClick={handleNextQuestion} type="button" className={buttonClass}>
                    Next
                </button>

                {
                    isLast &&
                    <button
                        onClick={handleCompleteQuiz} type="button" className={buttonClass}>
                        Complete
                    </button>
                }
            </div>

        </>
    )
}