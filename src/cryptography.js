import { Component } from 'react';

class Cryptography extends Component {
  constructor(props) {
    super(props)
    if (this.constructor === Cryptography) {
      throw new TypeError("Can not construct Cryptography class.");
    }
    //else (called from child)
    if (this.applyShift === Cryptography.prototype.applyShift) {
      throw new TypeError("Please implement Cryptography method applyShift.");
    }
  }
  applyShift() {
    throw new TypeError("Do not call Cryptography method applyShift from child.");
  }

  crypt(beforeValue, shift, plusOrMinus) {
    var shiftIndex = 0;
    var cryptCharCodes = [];

    for (let i = 0; i < beforeValue.length; i++) {
      var cryptedCharCode = beforeValue.charCodeAt(i);
      if (cryptedCharCode < 97 || cryptedCharCode > 122) {
        cryptCharCodes[i] = cryptedCharCode;
      }
      else {
        var letterNumber = Cryptography.getNumberFromCharacterCode(cryptedCharCode);
        var shiftedLetterNumber = (this.applyShift(letterNumber, plusOrMinus, shift, shiftIndex) + 26) % 26;
        var shiftedCharCode = Cryptography.getCharCodeFromNumber(shiftedLetterNumber);
        cryptCharCodes[i] = shiftedCharCode;
        shiftIndex = (shiftIndex + 1) % shift.length;
      }
    }
    return String.fromCharCode.apply(null, cryptCharCodes);
  }

  decrypt(state) {
    state.decryptedValue = this.crypt(state.encryptedValue, state.shift, -1);
  }

  encrypt(state) {
    state.encryptedValue = this.crypt(state.decryptedValue, state.shift, +1);
  }

  recalculate(event) {
    event.preventDefault();
    let formValues = this.state;
    formValues[event.target.name] = event.target.value.toLowerCase();

    if (event.target.name === 'decryptedValue') {
      this.encrypt(formValues);
    }
    else {
      this.decrypt(formValues);
    }

    this.setState(formValues);
  }

  static getNumberFromCharacterCode(charCode) {
    return charCode - 97;
  }

  static getCharCodeFromNumber(charCode) {
    return charCode + 97;
  }
}

export default Cryptography;