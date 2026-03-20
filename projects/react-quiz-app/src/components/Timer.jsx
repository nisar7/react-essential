import { useContext } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Timer() {
    const { quizTime } = useContext(QuizContext)
    const minutes = Math.floor(quizTime / 60000);
    const seconds = Math.floor((quizTime % 60000) / 1000);

    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    return (
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
            <span className="text-sm text-gray-400">Time Left</span>
            <p className="text-xl font-bold">{formattedTime}</p>
        </div>
    );
}