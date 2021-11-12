import React, { useEffect, useState } from 'react'
import Decrypted from './decrypted'
import Encrypted from './encrypted'
import NumberInput from './input/number'
import TextInput from './input/text'

const CryptographyForm = ({ initialState, algorithm }) => {
  const {
    decrypted: initialDecrypted,
    encrypted: initialEncrypted,
    ...otherState
  } = initialState
  const [decrypted, setDecrypted] = useState(initialDecrypted)
  const [encrypted, setEncrypted] = useState(initialEncrypted)
  const [state, setState] = useState(otherState)

  useEffect(() => {
    handleDecryptedChange(decrypted)
  }, [state])

  const handleDecryptedChange = (value) => {
    const newEncrypted = algorithm.encrypt(value, state)
    setEncrypted(newEncrypted)
    setDecrypted(value)
  }

  const handleEncryptedChange = (value) => {
    const newDecrypted = algorithm.decrypt(value, state)
    console.log({ newDecrypted })
    setDecrypted(newDecrypted)
    setEncrypted(value)
  }

  const handleGenericChange = (event) => {
    const { value, name } = event.target
    const newState = { ...state, [name]: value }
    setState(newState)
  }

  const stateSetters = Object.keys(state).map((key) => {
    let InputComponent = TextInput
    if (typeof otherState[key] === 'number') {
      InputComponent = NumberInput
    }

    return (
      <InputComponent
        key={key}
        inputName={key}
        inputLabel={key}
        value={state[key]}
        callback={handleGenericChange}
      />
    )
  })

  return (
    <div className="CryptographyForm">
      {stateSetters}
      <Encrypted
        value={encrypted}
        callback={(e) => handleEncryptedChange(e.target.value)}
      />
      <Decrypted
        value={decrypted}
        callback={(e) => handleDecryptedChange(e.target.value)}
      />
    </div>
  )
}

export default CryptographyForm
