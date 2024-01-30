interface DisplayProps {
  value: string
  setValue: ( arg:string ) => void
}

const Display = ({value, setValue}: DisplayProps) => {
  return (
    <label htmlFor="display">
      <input type="text" name="display" id="display" value={value} onChange={e => setValue(e.currentTarget.value)}/>
    </label>
  )
}

export default Display