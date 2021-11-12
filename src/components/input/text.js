const TextInput = ({ inputName, inputLabel, value, callback }) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName}>{inputLabel}</label>
      <textarea name={inputName} value={value} onChange={callback}></textarea>
    </div>
  )
}

export default TextInput
