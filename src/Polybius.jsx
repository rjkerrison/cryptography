import React, { useEffect, useState } from 'react'
import { TextInput, Encrypted, Decrypted } from './Components'
import polybius from './helpers/polybius'

const Polybius = () => {
  const [decrypted, setDecrypted] = useState('polybius square')
  const [encrypted, setEncrypted] = useState('')
  const [delimiter, setDelimiter] = useState('.')

  useEffect(() => {
    handleDecryptedChange(decrypted)
  }, [delimiter])

  const handleDecryptedChange = (value) => {
    const newEncrypted = polybius.encrypt(value, delimiter)
    setEncrypted(newEncrypted)
    setDecrypted(value)
  }

  const handleEncryptedChange = (value) => {
    const newDecrypted = polybius.decrypt(value, delimiter)
    console.log({ newDecrypted })
    setDecrypted(newDecrypted)
    setEncrypted(value)
  }

  return (
    <div className="Polybius">
      <TextInput
        inputName="delimiter"
        inputLabel="Delimiter"
        value={delimiter}
        callback={(e) => setDelimiter(e.target.value)}
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

export default Polybius
