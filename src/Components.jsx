import React from 'react';

export class Encrypted extends React.Component {
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

export class Decrypted extends React.Component {
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

export class TextInput extends React.Component {
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

export class NumberInput extends React.Component {
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
