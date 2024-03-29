import { getNumberFromCharacterCode, shiftCharCode } from './shared'
import { CypherFunction, CypherInfo } from './types'

const polyalphabeticShiftString = (
  value: string,
  shiftString: string,
  isEncryption = true
) => {
  const cryptCharCodes = []

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    const shift = getShift(shiftString, i, isEncryption)
    cryptCharCodes[i] = shiftCharCode(charCode, shift)
  }

  return String.fromCharCode(...cryptCharCodes)
}

const getShift = (shiftString: string, i: number, isEncryption: boolean) => {
  const shiftCharCode = shiftString.charCodeAt(i % shiftString.length)
  const { number } = getNumberFromCharacterCode(shiftCharCode)
  return isEncryption ? number : -number
}

const decrypt: CypherFunction<PolyalphaConfig> = (value, { shiftString }) =>
  polyalphabeticShiftString(value, shiftString, false)

const encrypt: CypherFunction<PolyalphaConfig> = (value, { shiftString }) =>
  polyalphabeticShiftString(value, shiftString)

const polyalphabetic: CypherInfo<PolyalphaConfig> = {
  title: 'Polyalphabetic',
  algorithm: {
    decrypt,
    encrypt,
  },
  initialState: {
    shiftString: 'snake',
    decrypted: 'it belongs in a museum',
  },
  stateLabels: {
    shiftString: 'Shift characters according to',
  },
}

interface PolyalphaConfig {
  shiftString: string
}

export default polyalphabetic
