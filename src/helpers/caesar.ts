import { shiftCharCode } from './shared'
import { CypherAlgorithm } from './types'

const caesarShiftString = (value: string, shift: number) => {
  const cryptCharCodes = []

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    cryptCharCodes[i] = shiftCharCode(charCode, shift)
  }

  return String.fromCharCode(...cryptCharCodes)
}

const caesar: CypherAlgorithm<CaesarConfig> = {
  decrypt: (value, { shift }) => caesarShiftString(value, -shift),
  encrypt: (value, { shift }) => caesarShiftString(value, shift),
}

interface CaesarConfig {
  shift: number
}

export default caesar
