import { useRef, useState } from "react"
import ResultDialog from "./ResultDialog";
let count = 0;
export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const openDialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const isActive = timer.current != null;

    const handleTimerReset = () => {
        setTimeRemaining(targetTime * 1000)
    }


    const handleStopTimer = () => {
        clearInterval(timer.current)
        timer.current = null;
        openDialog.current.open()
    }

    if (timeRemaining <= 0) {
        handleStopTimer()
    }

    const handleStartClick = () => {
        timer.current = setInterval(() => {
            setTimeRemaining((preval) => preval - 10)
        }, 10
        );
    }



    let formattedRemainigTime = timeRemaining / 1000;

    return (
        <>
            <ResultDialog onReset={handleTimerReset} ref={openDialog} timeRemaining={timeRemaining} targetTime={targetTime} result="lost"  ></ResultDialog>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    Challenge is Running of time  {timeRemaining > 0 ? formattedRemainigTime + "s" : ""}
                </p>
                <p>

                    <button onClick={isActive ? handleStopTimer : handleStartClick}>{isActive ? "Stop Challenge" : "Start Challenge "}</button>
                </p>

                <p className={isActive > 0 ? "active" : "undefined"}>
                    {isActive > 0 ? "Timer is Running" : "Timer is inactive"}

                </p>

            </section>
        </>
    )
}