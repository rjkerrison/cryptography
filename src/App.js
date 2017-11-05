import React, { Component } from 'react';
import logo from './logo.svg';
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

class Caesar extends Component {
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
        <input
          name="shift"
          type="number"
          value={this.state.shift}
          onChange={this.recalculate.bind(this)}/>
        <textarea
          name="encryptedValue"
          type="text"
          value={this.state.encryptedValue}
          onChange={this.recalculate.bind(this)}></textarea>
        <textarea
          name="decryptedValue"
          type="text"
          value={this.state.decryptedValue}
          onChange={this.recalculate.bind(this)}></textarea>
      </div>
      )
  }

  decrypt(state) {
    var shift = state.shift;
    var encryptedValue = state.encryptedValue;
    var decryptedCharCodes = [];
    for (var i = 0; i < encryptedValue.length; i++) {
      var encryptedValueCharCode = encryptedValue.charCodeAt(i);
      if (encryptedValueCharCode < 97 || encryptedValueCharCode > 122) {
        decryptedCharCodes[i] = encryptedValueCharCode;
      }
      else {
        var shiftedCharCode = 97 + ((26 + encryptedValueCharCode - 97 - shift) % 26);
        decryptedCharCodes[i] = shiftedCharCode;
      }
    }
    state.decryptedValue = String.fromCharCode.apply(null, decryptedCharCodes);
  }

  encrypt(state) {
    var shift = state.shift;
    var decryptedValue = state.decryptedValue;
    var encryptedCharCodes = [];
    for (var i = 0; i < decryptedValue.length; i++) {
      var decryptedValueCharCode = decryptedValue.charCodeAt(i);
      if (decryptedValueCharCode < 97 || decryptedValueCharCode > 122) {
        encryptedCharCodes[i] = decryptedValueCharCode;
      }
      else {
        var shiftedCharCode = 97 + ((26 + decryptedValueCharCode - 97 + shift) % 26);
        encryptedCharCodes[i] = shiftedCharCode;
      }
    }
    state.encryptedValue = String.fromCharCode.apply(null, encryptedCharCodes);
  }

  recalculate(event) {
    event.preventDefault();
    let formValues = this.state;
    formValues[event.target.name] = event.target.value;

    console.log(formValues);

    if (event.target.name !== 'decryptedValue') {
      this.decrypt(formValues)
    }
    else {
      this.encrypt(formValues);
    }

    console.log(formValues);

    this.setState(formValues);
  }
}

class Polyalphabetic extends Component {
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
        <input
          name="shift"
          type="text"
          value={this.state.shift}
          onChange={this.recalculate.bind(this)}/>
        <textarea
          name="encryptedValue"
          type="text"
          value={this.state.encryptedValue}
          onChange={this.recalculate.bind(this)}></textarea>
        <textarea
          name="decryptedValue"
          type="text"
          value={this.state.decryptedValue}
          onChange={this.recalculate.bind(this)}></textarea>
      </div>
      )
  }

  decrypt(state) {
    state.decryptedValue = this.crypt(state.encryptedValue, state.shift, -1);
  }

  encrypt(state) {
    state.encryptedValue = this.crypt(state.decryptedValue, state.shift, +1);
  }

  crypt(beforeValue, shift, plusOrMinus) {
    var shiftIndex = 0;
    var cryptCharCodes = [];
    var shiftValues = [];
    for (let i = 0; i < shift.length; i++) {
      shiftValues[i] = shift.charCodeAt(i) - 96;
    }

    console.log(shiftValues);

    for (let i = 0; i < beforeValue.length; i++) {
      var cryptedCharCode = beforeValue.charCodeAt(i);
      if (cryptedCharCode < 97 || cryptedCharCode > 122) {
        cryptCharCodes[i] = cryptedCharCode;
      }
      else {
        var shiftedCharCode = 97 + ((26 + cryptedCharCode - 97 + (plusOrMinus) * shiftValues[shiftIndex]) % 26);
        cryptCharCodes[i] = shiftedCharCode;
        shiftIndex = (shiftIndex + 1) % shift.length;
      }
    }
    return String.fromCharCode.apply(null, cryptCharCodes);
  }

  recalculate(event) {
    event.preventDefault();
    let formValues = this.state;
    formValues[event.target.name] = event.target.value.toLowerCase();

    if (event.target.name === 'encryptedValue') {
      this.decrypt(formValues)
    }
    else {
      this.encrypt(formValues);
    }

    this.setState(formValues);
  }
}

export default App;
