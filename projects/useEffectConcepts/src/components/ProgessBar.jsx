import { useEffect  , useState} from "react";

export default function ProgressBar() {
    const [timer, setTimer] = useState(3000);

    useEffect(() => {
        const progressVal = setInterval(() => {
            setTimer(prevVal => prevVal - 10)
        }, 10);

        return (() => {

            clearInterval(progressVal)
        })
    }, [])

    return (<progress value={timer} max="3000" ></progress>)
}