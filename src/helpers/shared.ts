const isLetter = (charCode: number) => {
  // uppercase range
  if (charCode <= 90) {
    return charCode >= 65
  }
  // lowercase range
  if (charCode >= 97) {
    return charCode <= 122
  }
  return false
}

const getNumberFromCharacterCode = (charCode: number) => {
  if (charCode < 97) {
    // capitals go to the
    return { number: charCode - 65, isUppercase: true }
  }
  return { number: charCode - 97, isUppercase: false }
}

const getCharCodeFromNumber = ({
  number,
  isUppercase,
}: {
  number: number,
  isUppercase?: boolean
}) => {
  if (isUppercase) {
    return number + 65
  }
  return number + 97
}

const shiftCharCode = (charCode: number, shift: number) => {
  if (!isLetter(charCode)) {
    return charCode
  }

  const { number, isUppercase } = getNumberFromCharacterCode(charCode)
  const shiftedCharCode = getCharCodeFromNumber({
    number: (number + shift + 26) % 26,
    isUppercase,
  })

  return shiftedCharCode
}

export { getNumberFromCharacterCode, getCharCodeFromNumber, shiftCharCode }
