import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import NavBar from './components/NavBar'

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  </Router>
)

export default App
