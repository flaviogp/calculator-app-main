import { useState } from "react"
import Display from "../Display"
import Keypad from "../Keypad"

const Main = () => {
  const [value, setValue] = useState('');
  return (
    <main className="main">
      <Display value={value} setValue={setValue}/>
      <Keypad value={value} setValue={setValue}/>
    </main>
  )
}

export default Main