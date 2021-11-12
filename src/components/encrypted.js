import TextInput from './input/text'

const Encrypted = (props) => {
  return (
    <TextInput
      {...props}
      inputName="encryptedValue"
      inputLabel="Encrypted value"
    />
  )
}

export default Encrypted
