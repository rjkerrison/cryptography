import React from 'react'
import CryptographyForm from './components/CryptographyForm'
import polybius from './helpers/polybius'

const Polybius = () => {
  return (
    <CryptographyForm
      initialState={{
        delimiter: '.',
        decrypted: 'hello there',
      }}
      algorithm={polybius}
    />
  )
}

export default Polybius
