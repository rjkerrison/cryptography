import React, { Component } from 'react'
import Caesar from './Caesar.jsx'
import Polyalphabetic from './Polyalphabetic.jsx'
import Polybius from './Polybius.jsx'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [
        'firstOne',
        'secondOne',
        'thirdOne'
      ]
    }
  }

  updateValue(index, state) {
    var value = state.decryptedValue;
    var values = this.state.values;
    values[index] = value;
    this.setState({
      values: values
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Caesar ({this.state.values[0]}, {this.state.values[1]})</h2>
        <Caesar
          inValue={this.state.values[0]}
          callback={(x) => this.updateValue(1, x)}
          />
        <h2>Polyalphabetic ({this.state.values[1]}, {this.state.values[2]})</h2>
        <Polyalphabetic
          inValue={this.state.values[1]}
          callback={(x) => this.updateValue(2, x)}
          />
        <h2>Polybius</h2>
        <Polybius/>
      </div>
    );
  }
}

export default App;
