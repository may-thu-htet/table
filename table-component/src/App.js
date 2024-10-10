import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/amazon-list">Amazon Questions list</Link>
          </li>
          <li>
            <Link to="/google-list">Google Questions list</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/amazon-list" element=""></Route>
        <Route path="/google-list" element=""></Route>
      </Routes>
    </Router>
  );
}

export default App;
