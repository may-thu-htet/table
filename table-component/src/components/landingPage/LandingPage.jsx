import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default LandingPage;
