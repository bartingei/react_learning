import Signup from "./components/signup.jsx";
import Home from "./Home/Home.jsx";
import Login from "./login/Login.jsx";
import Logout from "./Logout/Logout.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {

  /**
   *       <Router>

        <nav>
        <Link className="links" to="/login">Login</Link> |{" "}
        <Link className="links" to="/signup">Signup</Link> |{" "}
        <Link className="links" to="/logout">Logout</Link>
      </nav>
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      

      </Router>
   */
  
  return(
  
    <Home/>


  );

}

export default App
