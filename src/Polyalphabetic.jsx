import React from 'react'
import CryptographyForm from './components/CryptographyForm'
import polyalphabetic from './helpers/polyalphabetic'

const Polyalphabetic = () => {
  return (
    <CryptographyForm
      initialState={{
        shiftString: 'snake',
        decrypted: 'it belongs in a museum',
      }}
      algorithm={polyalphabetic}
    />
  )
}

export default Polyalphabetic
