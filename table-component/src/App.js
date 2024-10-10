import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import AmazonList from "./components/list/AmazonList";
import LandingPage from "./components/landingPage/LandingPage";
import GoogleList from "./components/list/GoogleList";

function App() {
  return (
    <Router>
      {/* <LandingPage /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/amazon-list" element={<AmazonList />} />
        <Route path="/google-list" element={<GoogleList />} />
      </Routes>
    </Router>
  );
}

export default App;
