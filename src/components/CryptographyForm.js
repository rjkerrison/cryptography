import React, { useEffect, useState } from 'react'
import Decrypted from './decrypted'
import Encrypted from './encrypted'
import NumberInput from './input/number'
import TextInput from './input/text'
import Toggle from './input/Toggle'

const CryptographyForm = ({ initialState, algorithm }) => {
  const [isEncryption, setIsEncryption] = useState(false)
  const [decrypted, setDecrypted] = useState('')
  const [encrypted, setEncrypted] = useState('')
  const [state, setState] = useState({})
  const [stateSetters, setStateSetters] = useState([])

  useEffect(() => {
    const {
      decrypted: initialDecrypted,
      encrypted: initialEncrypted,
      ...otherState
    } = initialState

    setDecrypted(initialDecrypted)
    setEncrypted(initialEncrypted)
    setState(otherState)
  }, [initialState])

  useEffect(() => {
    if (isEncryption) {
      handleDecryptedChange(decrypted)
    } else {
      handleEncryptedChange(encrypted)
    }
    const stateSetters = getStateSetters(state, handleGenericChange)
    setStateSetters(stateSetters)
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

  const handleGenericChange = (name, value) => {
    const newState = { ...state, [name]: value }
    setState(newState)
  }

  return (
    <div className="CryptographyForm">
      {stateSetters}
      <Decrypted
        value={decrypted}
        callback={(_, value) => handleDecryptedChange(value)}
      />
      <Encrypted
        value={encrypted}
        callback={(_, value) => handleEncryptedChange(value)}
      />
      <Toggle
        value={isEncryption}
        inputName={'isEncryption'}
        inputLabel={'Are we encrypting?'}
        callback={() => setIsEncryption(!isEncryption)}
      />
    </div>
  )
}

const getStateSetters = (state, handleGenericChange) => {
  return Object.keys(state).map((key) => {
    let InputComponent = TextInput
    if (typeof state[key] === 'number') {
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
}

export default CryptographyForm
