import React from 'react'
import Cryptography from './cryptography'
import { NumberInput, Encrypted, Decrypted } from './Components'

class Caesar extends Cryptography {
  constructor(props) {
    super(props);
    this.state = {
      encryptedValue: this.props.inValue,
      decryptedValue: 'akzi akzi',
      shift: 1
    }
    this.initialise()
  }
  render () {
    return (
      <div className="Caesar">
        <NumberInput
          value={this.state.shift}
          callback={this.recalculate.bind(this)}
          inputName="shift"
          inputLabel="Shift Value"
          min={0}
          max={25}
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

  applyShift(letterNumber, plusOrMinus, shift) {
    return letterNumber + (plusOrMinus * shift);
  }
}

export default Caesar;
