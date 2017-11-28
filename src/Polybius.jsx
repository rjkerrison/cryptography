import React from 'react'
import Cryptography from './cryptography'
import { TextInput, Encrypted, Decrypted } from './Components'

class Polybius extends Cryptography {
  constructor(props) {
    super(props);
    this.state = {
      decryptedValue: 'polybius square',
      delimiter: ','
    }
    this.encrypt(this.state);
    this.initialise()
  }

  render() {
    return (
      <div className="Polybius">
        <TextInput
          inputName="delimiter"
          inputLabel="Delimiter"
          value={this.state.delimiter}
          callback={this.recalculate.bind(this)}
          />
        <Encrypted
          value={this.state.encryptedValue}
          callback={this.recalculate.bind(this)}
          />
        <Decrypted
          value={this.state.decryptedValue}
          callback={this.recalculate.bind(this)}
          />
      </div>
      )
  }

  applyShift() {
    return;
  }

  decrypt(state) {
    var beforeValue = state.encryptedValue;

    var cryptCharCodes = [];
    var polybiusCodes = beforeValue.split(state.delimiter);
    for (let i = 0; i < polybiusCodes.length / 2; i++) {
      var letterNumber = (5 * polybiusCodes[2*i]) + (1 * polybiusCodes[2*i + 1]) - 6;
      cryptCharCodes.push(Cryptography.getCharCodeFromNumber(letterNumber));
    }

    state.decryptedValue = String.fromCharCode.apply(null, cryptCharCodes)
  }

  encrypt(state) {
    var beforeValue = state.decryptedValue;
    var polybiusCodes = [];

    for (let i = 0; i < beforeValue.length; i++) {
      var letterNumber = Cryptography.getNumberFromCharacterCode(beforeValue.charCodeAt(i));
      var polybiusRow = Math.floor(letterNumber / 5) + 1;
      var polybiusColumn = (letterNumber % 5) + 1;
      polybiusCodes.push(polybiusRow);
      polybiusCodes.push(polybiusColumn);
    }

    state.encryptedValue = polybiusCodes.join(state.delimiter)
  }
}

export default Polybius;
