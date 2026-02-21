import { CORE_CONCEPTS } from "../data"
import Section from "../layouts/Section"
import Coreconcept from "./Coreconcept"
import Example from "./Example"

export default function CoreConcepts() {
    return (<>
        <Section id="core-concepts" title="Core Concept">
           
            <ul>
                {CORE_CONCEPTS.map((val, i) => {

                    return (<Coreconcept key={i} concept={val}
                    ></Coreconcept>)

                })}

            </ul>

        </Section>
        <Example></Example>
    </>)
}