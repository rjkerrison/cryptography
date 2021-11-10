import { useState } from 'react'
import Caesar from './Caesar.jsx'
import Polyalphabetic from './Polyalphabetic.jsx'
import Polybius from './Polybius.jsx'

const App = () => {
  const [values, setValues] = useState(['firstOne', 'secondOne', 'thirdOne'])

  function updateValue(index, x) {
    const newValues = [...values]
    newValues.splice(index, 1, x.decryptedValue)

    setValues(newValues)
  }

  return (
    <div className="App">
      <h2>
        Caesar ({values[0]}, {values[1]})
      </h2>
      <Caesar inValue={values[0]} callback={(x) => updateValue(1, x)} />
      <h2>
        Polyalphabetic ({values[1]}, {values[2]})
      </h2>
      <Polyalphabetic inValue={values[1]} callback={(x) => updateValue(2, x)} />
      <h2>Polybius</h2>
      <Polybius />
    </div>
  )
}

export default App
