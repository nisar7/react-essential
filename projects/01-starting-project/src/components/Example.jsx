import { useState } from "react"
import TabButton from "../layouts/TabButton"
import { EXAMPLES } from "../data"
import Section from "../layouts/Section"
import Tabs from "../layouts/Tabs"

export default function Example() {
    const [selectedChoice, setSelectedChoice] = useState(null)

    function handleComponentClick(clickedChoice) {
        setSelectedChoice(clickedChoice)
    }

    let tabContent = <p>Please Select Some topic </p>

    if (selectedChoice) {
        tabContent = (<div id="tab-content">
            <h2>{EXAMPLES[selectedChoice]?.title}</h2>
            <p>{EXAMPLES[selectedChoice]?.description}</p>
            <pre>
                <p>
                    {EXAMPLES[selectedChoice]?.code}
                </p>
            </pre>
        </div>)
    }

    return (
        <>
            <Section id="examples" title="Examples">

                <Tabs  buttons={<>
                    <TabButton isSelected={selectedChoice === "components"} onClick={() => handleComponentClick("components")}>Components</TabButton>
                    <TabButton isSelected={selectedChoice === "jsx"} onClick={() => handleComponentClick("jsx")}>JSX</TabButton>
                    <TabButton isSelected={selectedChoice === "props"} onClick={() => handleComponentClick("props")}>Props</TabButton>
                    <TabButton isSelected={selectedChoice === "state"} onClick={() => handleComponentClick("state")}>State</TabButton>
                </>}>{tabContent}</Tabs>
            </Section>
        </>
    )
}