import { DIFF_TITLE } from "../data";

export default function Header() {
    function getDifferentTitle() {
        return Math.floor(Math.random() * DIFF_TITLE.length);
    }
    return (
        <div>
            <header>
                <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {DIFF_TITLE[getDifferentTitle()]} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>

        </div>
    )
}  