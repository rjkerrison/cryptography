import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'

import Cypher from './pages/Cypher.js'

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <h1>Cryptography</h1>
          <nav>
            <ul>
              <li>
                <Link to="/cypher/caesar">Caesar</Link>
              </li>
              <li>
                <Link to="/cypher/polyalpha">Polyalphabetic</Link>
              </li>
              <li>
                <Link to="/cypher/polybius">Polybius</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/cypher/:slug" element={<Cypher />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
