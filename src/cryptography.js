import { Component } from 'react'

class Cryptography extends Component {
  constructor(props) {
    super(props)
    if (this.constructor === Cryptography) {
      throw new TypeError('Can not construct Cryptography class.')
    }
    //else (called from child)
    if (this.applyShift === Cryptography.prototype.applyShift) {
      throw new TypeError('Please implement Cryptography method applyShift.')
    }
  }
  initialise() {
    this.recalculate({
      preventDefault: () => null,
      target: {
        name: 'encryptedValue',
        value: this.state.encryptedValue,
      },
    })
  }
  applyShift() {
    throw new TypeError(
      'Do not call Cryptography method applyShift from child.'
    )
  }

  crypt(beforeValue, shift, plusOrMinus) {
    let shiftIndex = 0
    const cryptCharCodes = []

    for (let i = 0; i < beforeValue.length; i++) {
      const cryptedCharCode = beforeValue.charCodeAt(i)
      if (cryptedCharCode < 97 || cryptedCharCode > 122) {
        cryptCharCodes[i] = cryptedCharCode
      } else {
        const letterNumber =
          Cryptography.getNumberFromCharacterCode(cryptedCharCode)
        const shiftedLetterNumber =
          (this.applyShift(letterNumber, plusOrMinus, shift, shiftIndex) + 26) %
          26
        const shiftedCharCode =
          Cryptography.getCharCodeFromNumber(shiftedLetterNumber)
        cryptCharCodes[i] = shiftedCharCode
        shiftIndex = (shiftIndex + 1) % shift.length
      }
    }
    return String.fromCharCode.apply(null, cryptCharCodes)
  }

  decrypt(state) {
    state.decryptedValue = this.crypt(state.encryptedValue, state.shift, -1)
  }

  encrypt(state) {
    state.encryptedValue = this.crypt(state.decryptedValue, state.shift, +1)
  }

  recalculate(event) {
    event.preventDefault()
    let formValues = this.state
    formValues[event.target.name] = event.target.value.toLowerCase()

    if (event.target.name === 'decryptedValue') {
      this.encrypt(formValues)
    } else {
      this.decrypt(formValues)
    }

    this.setState(formValues)

    if (typeof this.props.callback === 'function') {
      this.props.callback(this.state)
    }
  }

  static getNumberFromCharacterCode(charCode) {
    return charCode - 97
  }

  static getCharCodeFromNumber(charCode) {
    return charCode + 97
  }
}

export default Cryptography
