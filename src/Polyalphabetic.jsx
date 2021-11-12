import React, { useEffect, useState } from 'react'
import Decrypted from './components/decrypted'
import Encrypted from './components/encrypted'
import TextInput from './components/input/text'
import polyalphabetic from './helpers/polyalphabetic'

const Polyalphabetic = ({ inValue }) => {
  const [encrypted, setEncrypted] = useState(inValue)
  const [decrypted, setDecrypted] = useState('')
  const [shiftString, setShiftString] = useState('snake')

  useEffect(() => {
    handleEncryptedChange(encrypted)
  }, [shiftString])

  const handleDecryptedChange = (value) => {
    const newEncrypted = polyalphabetic.encrypt(value, shiftString)
    setEncrypted(newEncrypted)
    setDecrypted(value)
  }

  const handleEncryptedChange = (value) => {
    const newDecrypted = polyalphabetic.decrypt(value, shiftString)
    console.log({ newDecrypted })
    setDecrypted(newDecrypted)
    setEncrypted(value)
  }

  return (
    <div className="Polyalphabetic">
      <TextInput
        value={shiftString}
        callback={(e) => setShiftString(e.target.value)}
        inputName="shift"
        inputLabel="Shift Word"
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

export default Polyalphabetic
