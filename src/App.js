import React, { Component } from 'react';
import logo from './logo.svg';
import Cryptography from './cryptography';
import { TextInput, NumberInput, Encrypted, Decrypted } from './Components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to relllllooooad.
        </p>
        <h2>Caesar</h2>
        <Caesar/>
        <h2>Polyalphabetic</h2>
        <Polyalphabetic/>
        <h2>Polybius</h2>
        <Polybius/>
      </div>
    );
  }
}

class Caesar extends Cryptography {
  constructor(props) {
    super(props);
    this.state = {
      encryptedValue: 'blah blah',
      decryptedValue: 'akzi akzi',
      shift: 1
    }
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

class Polyalphabetic extends Cryptography {
  constructor(props) {
    super(props);
    this.state = {
      encryptedValue: 'blah blah',
      decryptedValue: 'akzi akzi',
      shift: 'snake'
    }
    this.decrypt(this.state);
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

  applyShift(letterNumber, plusOrMinus, shift, shiftIndex) {
    var shiftValue = Cryptography.getNumberFromCharacterCode(shift.charCodeAt(shiftIndex));
    return letterNumber + (plusOrMinus * shiftValue);
  }
}

class Polybius extends Cryptography {
  constructor(props) {
    super(props);
    this.state = {
      decryptedValue: 'polybius square',
      delimiter: ','
    }
    this.encrypt(this.state);
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

export default App;
