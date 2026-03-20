
import { QuizContextProvider } from "./context/QuizContext"
import Quiz from "./components/Quiz"

function App() {

  return (
    <QuizContextProvider>
      <Quiz></Quiz>
    </QuizContextProvider>

  )
}

export default App