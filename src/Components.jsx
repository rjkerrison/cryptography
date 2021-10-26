export const Encrypted = (props) => {
  return (
    <TextInput
      value={props.value}
      callback={props.callback}
      inputName="encryptedValue"
      inputLabel="Encrypted value"
    />
  )
}

export const Decrypted = (props) => {
  return (
    <TextInput
      value={props.value}
      callback={props.callback}
      inputName="decryptedValue"
      inputLabel="Decrypted value"
    />
  )
}

export const TextInput = (props) => {
  return (
    <div className="input-group">
      <label htmlFor={props.inputName}>{props.inputLabel}</label>
      <textarea
        name={props.inputName}
        value={props.value}
        onChange={props.callback}
      ></textarea>
    </div>
  )
}

export const NumberInput = (props) => {
  return (
    <div className="input-group">
      <label htmlFor={props.inputName}>{props.inputLabel}</label>
      <input
        type="number"
        min={props.min}
        max={props.max}
        name={props.inputName}
        value={props.value}
        onChange={props.callback}
      />
    </div>
  )
}
