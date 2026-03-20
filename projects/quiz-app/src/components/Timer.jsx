import { useEffect, useState } from "react";

export default function Timer({ time, onTimeComplete }) {

    const [remainingTime, setRemainingTime] = useState(time)
    const seconds = Math.ceil(remainingTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formattedTime = `${minutes}:${secs.toString().padStart(2, "0")}`;

    useEffect(() =>{
        setRemainingTime(time)
    }, [time])


    useEffect(() => {
        const timeOut = setTimeout(onTimeComplete, time);
        return (() => {
            clearTimeout(timeOut)
        })
    }, [ onTimeComplete])


    useEffect(() => {
        const intervalOut = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1000)
        }, 1000);


        return (() => {
            clearInterval(intervalOut)
        })
    }, [])



    return (<>
        <div >
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                {formattedTime}
            </div>

            <progress id="question progress" value={remainingTime} max={time}></progress>

        </div>
    </>)
}