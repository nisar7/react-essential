import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Table from "./components/table"
import { useState } from "react"




function App() {
  const [investmentValues, setInvestmentValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  })



  


  function handleInputChange(event, value) {

    setInvestmentValues((preVal) => {
      const update = { ...preVal }
      update[value] = +event.target.value
      return update

    })


  }

  return (
    <>
      <section id="header">
        <Header></Header>
      </section>

      <main>
        <section id="user-input">
          <UserInput
            initialInvestment={investmentValues?.initialInvestment}
            annualInvestment={investmentValues?.annualInvestment}
            expectedReturn={investmentValues?.expectedReturn}
            duration={investmentValues?.duration}
            onChange={handleInputChange}
          ></UserInput>
        </section>

        {investmentValues && <section  className="center">
          <Table values={investmentValues}></Table>

        </section>}
      </main>
    </>
  )
}

export default App
