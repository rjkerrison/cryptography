import { getCharCodeFromNumber, getNumberFromCharacterCode } from './shared'
import { CypherAlgorithm, CypherFunction } from './types'

const decrypt: CypherFunction<PolybiusConfig> = (
  encryptedValue,
  { delimiter }
) => {
  const cryptCharCodes = []
  const polybiusCodes = encryptedValue
    ?.split(delimiter)
    ?.map((code) => parseInt(code, 10))

  for (let i = 0; i < polybiusCodes.length / 2; i++) {
    const number = 5 * polybiusCodes[2 * i] + 1 * polybiusCodes[2 * i + 1] - 6
    const charCode = getCharCodeFromNumber({ number })

    if (isNaN(charCode)) {
    }

    cryptCharCodes.push(charCode)
  }
  console.log('CHARCODES', {
    cryptCharCodes,
  })

  return String.fromCharCode.apply(null, cryptCharCodes)
}

const encrypt: CypherFunction<PolybiusConfig> = (
  decryptedValue,
  { delimiter }
) => {
  const polybiusCodes = []

  for (let i = 0; i < decryptedValue.length; i++) {
    const { number } = getNumberFromCharacterCode(decryptedValue.charCodeAt(i))
    const polybiusRow = Math.floor(number / 5) + 1
    const polybiusColumn = (number % 5) + 1
    polybiusCodes.push(polybiusRow)
    polybiusCodes.push(polybiusColumn)
  }

  return polybiusCodes.join(delimiter)
}

const polybius: CypherAlgorithm<PolybiusConfig> = {
  decrypt,
  encrypt,
}

interface PolybiusConfig {
  delimiter: string
}

export default polybius
