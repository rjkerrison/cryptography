const Toggle = ({ inputName, inputLabel, value, callback }) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName}>{inputLabel}</label>
      <input
        type="checkbox"
        name={inputName}
        checked={value}
        onChange={({ target }) => callback(target.name, target.value)}
      ></input>
    </div>
  )
}

export default Toggle
