interface DisplayProps {
  value: string
  setValue: ( arg:string ) => void
}

const Display = ({value}: DisplayProps) => {
  return (
    <label htmlFor="display">
      <input type="text" name="display" id="display" value={value ? value : '0'} readOnly/>
    </label>
  )
}

export default Display