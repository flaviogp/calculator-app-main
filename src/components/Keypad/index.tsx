
interface KeypadProps {
  setvalue: (arg: string) => void
}

const Keypad = ({setvalue}:KeypadProps) => {

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = e.currentTarget.innerText
    setvalue(value)
  }

  return (
    <div className="keypad">
      <div className="row">
        <div id="7" onClick={(e) => handleClick(e)}>7</div>
        <div id="8" onClick={(e) => handleClick(e)}>8</div>
        <div id="9" onClick={(e) => handleClick(e)}>9</div>
        <div id="del">del</div>
      </div>
      <div className="row">
        <div id="4" onClick={(e) => handleClick(e)}>4</div>
        <div id="5" onClick={(e) => handleClick(e)}>5</div>
        <div id="6" onClick={(e) => handleClick(e)}>6</div>
        <div id="plus" onClick={(e) => handleClick(e)}>+</div>
      </div>
      <div className="row">
        <div id="1" onClick={(e) => handleClick(e)}>1</div>
        <div id="2" onClick={(e) => handleClick(e)}>2</div>
        <div id="3" onClick={(e) => handleClick(e)}>3</div>
        <div id="minus" onClick={(e) => handleClick(e)}>-</div>
      </div>
      <div className="row">
        <div id="dot" onClick={(e) => handleClick(e)}>.</div>
        <div id="0" onClick={(e) => handleClick(e)}>0</div>
        <div id="bar" onClick={(e) => handleClick(e)}>/</div>
        <div id="multiplier" onClick={(e) => handleClick(e)}>x</div>
      </div>
      <div className="row buttons">
      <div id="reset">reset</div>
      <div id="equal">=</div>
      </div>
    </div>
  )
}

export default Keypad