import { shiftCharCode } from './shared'
import { CypherAlgorithm, CypherInfo } from './types'

const caesarShiftString = (value: string, shift: number) => {
  const cryptCharCodes = []

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    cryptCharCodes[i] = shiftCharCode(charCode, shift)
  }

  return String.fromCharCode(...cryptCharCodes)
}

const algorithm: CypherAlgorithm<CaesarConfig> = {
  decrypt: (value, { shift }) => caesarShiftString(value, -shift),
  encrypt: (value, { shift }) => caesarShiftString(value, shift),
}

interface CaesarConfig {
  shift: number
}

const caesar: CypherInfo<CaesarConfig> = {
  title: 'Caesar',
  algorithm,
  initialState: {
    shift: 1,
    decrypted: 'alea jacta est',
  },
  stateLabels: {
    shift: 'Shift characters by',
  },
}

export default caesar
