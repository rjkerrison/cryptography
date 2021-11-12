import { getNumberFromCharacterCode, shiftCharCode } from './shared'

const polyalphabeticShiftString = (value, shiftString, isEncryption = true) => {
  const cryptCharCodes = []

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    const shift = getShift(shiftString, i, isEncryption)
    cryptCharCodes[i] = shiftCharCode(charCode, shift)
  }

  return String.fromCharCode(...cryptCharCodes)
}

const getShift = (shiftString, i, isEncryption) => {
  const shiftCharCode = shiftString.charCodeAt(i % shiftString.length)
  const { number } = getNumberFromCharacterCode(shiftCharCode)
  return isEncryption ? number : -number
}

const polyalphabetic = {
  decrypt: (value, shiftString) =>
    polyalphabeticShiftString(value, shiftString, false),
  encrypt: polyalphabeticShiftString,
}

export default polyalphabetic
