import TextInput from './input/text'

const Decrypted = (props) => {
  return (
    <TextInput
      {...props}
      inputName="decryptedValue"
      inputLabel="Decrypted value"
    />
  )
}

export default Decrypted
