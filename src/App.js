import React, { Component } from 'react';
import logo from './logo.svg';
import Cryptography from './cryptography';
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

class Encrypted extends Component {
  render() {
    return (
      <TextInput
        value={this.props.value}
        callback={this.props.callback}
        inputName="encryptedValue"
        inputLabel="Encrypted value"
        />
      )
  }
}

class Decrypted extends Component {
  render() {
    return (
      <TextInput
        value={this.props.value}
        callback={this.props.callback}
        inputName="decryptedValue"
        inputLabel="Decrypted value"
        />
      )
  }
}

class TextInput extends Component {
  render() {
    return (
      <div className="input-group">
          <label
            htmlFor={this.props.inputName}>
            {this.props.inputLabel}
          </label>
          <textarea
            name={this.props.inputName}
            value={this.props.value}
            onChange={this.props.callback}></textarea>
        </div>
      )
  }
}

class NumberInput extends Component {
  render() {
    return (
      <div className="input-group">
          <label
            htmlFor={this.props.inputName}>
            {this.props.inputLabel}
          </label>
          <input
            type="number"
            min={this.props.min}
            max={this.props.max}
            name={this.props.inputName}
            value={this.props.value}
            onChange={this.props.callback}
            />
        </div>
      )
  }
}

export default App;
