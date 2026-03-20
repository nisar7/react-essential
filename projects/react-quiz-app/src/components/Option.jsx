import { useContext, useState } from "react";
import { QuizContext } from "../context/QuizContext";

export default function Option({ value, name, questionId }) {

    const [selectedOption, setSelectedOption] = useState("");

    const {handleSelectAnswer, answerList} = useContext(QuizContext)

    const handleSelectOption = (event, questionId) => {
        setSelectedOption(event.target.value)
        handleSelectAnswer(event.target.value, questionId)
    }
    return (
        <ul role="list" className="space-y-4 my-6">
            <li className="flex items-center gap-3">
                <input
                    type="radio"
                    name={name}
                    value={value}
                    checked={answerList[questionId] == selectedOption}
                    onChange={(event) => handleSelectOption(event, questionId)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />

                <span className="text-body cursor-pointer">
                    {value}
                </span>
            </li>
        </ul>
    );
}