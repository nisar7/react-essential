import { useState } from "react"
import Input from "./Input"


export default function UserInput({ onChange, initialInvestment, annualInvestment, expectedReturn, duration }) {



    return (<>
        <div className="input-group">
            

            <Input onChange={(event) => onChange(event, "initialInvestment")} label="Initial Investment" value={initialInvestment}></Input>
            <Input onChange={(event) => onChange(event, "annualInvestment")} label="Annual Investment" value={annualInvestment}></Input>
        </div>
        <div className="input-group">

            <Input onChange={(event) => onChange(event, "expectedReturn")} label="Expected Return" value={expectedReturn}></Input>
            <Input onChange={(event) => onChange(event, "duration")} label="Duration" value={duration}></Input>
        </div>


    </>)
}