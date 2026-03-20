import completeQuiz from "../assets/quiz-complete.png"
import question from "../data/question"

export default function Result({ answerList }) {

    console.log("This is answer List", answerList);

   
    const total = question.length;

    const obtainedScore = question.reduce((score, q) => {
        if (q?.answers[0] === answerList[q?.id]) {
            return score + 1
        }
        return score
    }, 0)

    return (<div id="summary">
        <h2>Summary </h2>
        <img src={completeQuiz}></img>
        <p>YOu Got {obtainedScore} Out of {total}</p>
    </div>)
}