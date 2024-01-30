import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
const [theme, setTheme] = useState(1)


  return (
    <div className={`app theme-${theme}`}>
      <Header  setTheme={setTheme} theme={theme}/>
      < Main />    
    </div>
  )
}

export default App
