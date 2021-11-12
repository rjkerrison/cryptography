import React, { useEffect, useState } from 'react'
import Decrypted from './components/decrypted'
import Encrypted from './components/encrypted'
import NumberInput from './components/input/number'
import caesar from './helpers/caesar'

const Caesar = ({ inValue }) => {
  const [encrypted, setEncrypted] = useState(inValue)
  const [decrypted, setDecrypted] = useState('')
  const [shift, setShift] = useState(1)

  useEffect(() => {
    handleEncryptedChange(encrypted)
  }, [shift])

  const handleDecryptedChange = (value) => {
    const newEncrypted = caesar.encrypt(value, shift)
    setEncrypted(newEncrypted)
    setDecrypted(value)
  }

  const handleEncryptedChange = (value) => {
    const newDecrypted = caesar.decrypt(value, shift)
    console.log({ newDecrypted })
    setDecrypted(newDecrypted)
    setEncrypted(value)
  }

  return (
    <div className="Caesar">
      <NumberInput
        value={shift}
        callback={(e) => setShift(e.target.value)}
        inputName="shift"
        inputLabel="Shift Value"
        min={0}
        max={25}
      />
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

export default Caesar
