import Timer from "./Timer";

export default function Header() {
    return (<>
        <header className="flex justify-between items-center bg-gray-800 px-6 py-4 text-white">
            <h1 className="text-2xl font-bold">React Quiz</h1>
            <Timer></Timer>
        </header>
    </>)
}