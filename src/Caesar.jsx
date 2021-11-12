import React from 'react'
import CryptographyForm from './components/CryptographyForm'
import caesar from './helpers/caesar'

const Caesar = () => {
  return (
    <CryptographyForm
      initialState={{
        shift: 1,
        decrypted: 'alea jacta est',
      }}
      algorithm={caesar}
    />
  )
}

export default Caesar
