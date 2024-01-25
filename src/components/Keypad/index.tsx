
const Keypad = () => {
  return (
    <div className="keypad">
      <div className="row">
        <div id="7">7</div>
        <div id="8">8</div>
        <div id="9">9</div>
        <div id="del">del</div>
      </div>
      <div className="row">
        <div id="4">4</div>
        <div id="5">5</div>
        <div id="6">6</div>
        <div id="plus">+</div>
      </div>
      <div className="row">
        <div id="1">1</div>
        <div id="2">2</div>
        <div id="3">3</div>
        <div id="minus">-</div>
      </div>
      <div className="row">
        <div id="dot">.</div>
        <div id="0">0</div>
        <div id="bar">/</div>
        <div id="multiplier">x</div>
      </div>
      <div className="row buttons">
      <div id="reset">reset</div>
      <div id="equal">=</div>
      </div>
    </div>
  )
}

export default Keypad