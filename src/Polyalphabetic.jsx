import React from 'react'
import Cryptography from './cryptography'
import { TextInput, Encrypted, Decrypted } from './Components'

class Polyalphabetic extends Cryptography {
  constructor(props) {
    super(props);
    this.state = {
      encryptedValue: this.props.inValue,
      decryptedValue: 'akzi akzi',
      shift: 'snake'
    }
    this.initialise()
  }
  render () {
    return (
      <div className="Polyalphabetic">
        <TextInput
          value={this.state.shift}
          callback={this.recalculate.bind(this)}
          inputName="shift"
          inputLabel="Shift Word"
          />
        <Encrypted
          value={this.props.inValue}
          callback={this.recalculate.bind(this)}
          />
        <Decrypted
          value={this.state.decryptedValue}
          callback={this.recalculate.bind(this)}
          />
      </div>
      )
  }

  applyShift(letterNumber, plusOrMinus, shift, shiftIndex) {
    var shiftValue = Cryptography.getNumberFromCharacterCode(shift.charCodeAt(shiftIndex));
    return letterNumber + (plusOrMinus * shiftValue);
  }
}

export default Polyalphabetic;
