import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import About from "./About/About"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App
