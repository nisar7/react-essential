import  headerImg  from "../assets/quiz-logo.png"

export default function Header() {
    return (
        <>
            <header className="header">
                <img src={headerImg}></img>
                <h1>React Quiz</h1>
            </header>
        </>
    )
}