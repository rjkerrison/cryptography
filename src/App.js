import Caesar from './Caesar.jsx'
import Polyalphabetic from './Polyalphabetic.jsx'
import Polybius from './Polybius.jsx'

const App = () => {
  return (
    <div className="App">
      <h2>Caesar</h2>
      <Caesar />
      <h2>Polyalphabetic</h2>
      <Polyalphabetic />
      <h2>Polybius</h2>
      <Polybius />
    </div>
  )
}

export default App
