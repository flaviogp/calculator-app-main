import Display from "../Display"
import Keypad from "../Keypad"

const Main = () => {
  return (
    <main className="main">
      <Display value={'32025'} />
      <Keypad />
    </main>
  )
}

export default Main