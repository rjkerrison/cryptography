const NumberInput = ({ inputName, inputLabel, min, max, value, callback }) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName}>{inputLabel}</label>
      <input
        type="number"
        min={min}
        max={max}
        name={inputName}
        value={value}
        onChange={callback}
      />
    </div>
  )
}

export default NumberInput
