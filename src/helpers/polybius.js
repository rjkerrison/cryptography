import { getCharCodeFromNumber, getNumberFromCharacterCode } from './shared'

const decrypt = (encryptedValue, delimiter) => {
  const cryptCharCodes = []
  const polybiusCodes = encryptedValue.split(delimiter)

  for (let i = 0; i < polybiusCodes.length / 2; i++) {
    const number = 5 * polybiusCodes[2 * i] + 1 * polybiusCodes[2 * i + 1] - 6
    const charCode = getCharCodeFromNumber({ number })
    cryptCharCodes.push(charCode)
  }

  return String.fromCharCode.apply(null, cryptCharCodes)
}

const encrypt = (decryptedValue, delimiter) => {
  const beforeValue = decryptedValue
  const polybiusCodes = []

  for (let i = 0; i < beforeValue.length; i++) {
    const { number } = getNumberFromCharacterCode(beforeValue.charCodeAt(i))
    const polybiusRow = Math.floor(number / 5) + 1
    const polybiusColumn = (number % 5) + 1
    polybiusCodes.push(polybiusRow)
    polybiusCodes.push(polybiusColumn)
  }

  return polybiusCodes.join(delimiter)
}

const polybius = {
  decrypt,
  encrypt,
}

export default polybius
