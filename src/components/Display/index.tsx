interface DisplayProps {
  value: string
}

const Display = ({value}: DisplayProps) => {
  return (
    <label htmlFor="display">
      <input type="text" name="display" id="display" value={value} />
    </label>
  )
}

export default Display