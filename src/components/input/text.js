const TextInput = ({ inputName, inputLabel, value, callback }) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName}>{inputLabel}</label>
      <textarea
        name={inputName}
        value={value}
        onChange={({ target }) => callback(target.name, target.value)}
      ></textarea>
    </div>
  )
}

export default TextInput
