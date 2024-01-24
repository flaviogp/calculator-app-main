
const Keypad = () => {
  return (
    <div className="keypad">
      <table>
        <td>
          <tr id="7">7</tr>
          <tr id="4">4</tr>
          <tr id="1">1</tr>
          <tr id="dot">.</tr>
        </td>
        <td>
          <tr id="8">8</tr>
          <tr id="5">5</tr>
          <tr id="2">2</tr>
          <tr id="0">0</tr>
        </td>
        <td>
          <tr id="9">9</tr>
          <tr id="6"> 6</tr>
          <tr id="3">3</tr>
          <tr id="bar">/</tr>
        </td>
        <td>
          <tr id="del">del</tr>
          <tr id="plus">+</tr>
          <tr id="minus">-</tr>
          <tr id="multiplier">x</tr>
        </td>
      </table>
      <div className="control-buttons">
        <button id="reset">reset</button>
        <button id="equal">=</button>
      </div>
    </div>
  )
}

export default Keypad