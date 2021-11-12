import { shiftCharCode } from './shared'

const caesarShiftString = (value, shift) => {
  const cryptCharCodes = []

  for (let i = 0; i < value.length; i++) {
    const charCode = value.charCodeAt(i)
    cryptCharCodes[i] = shiftCharCode(charCode, shift)
  }

  return String.fromCharCode(...cryptCharCodes)
}

const caesar = {
  decrypt: (value, { shift }) => caesarShiftString(value, -shift),
  encrypt: (value, { shift }) => caesarShiftString(value, shift),
}

export default caesar
