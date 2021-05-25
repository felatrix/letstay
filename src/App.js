import React from 'react'
import "./assets/scss/style.scss"

import LandingPage from 'pages/LandingPage'

import { BrowserRouter as Router , Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="body-container">
        <Route path="/" component={LandingPage}></Route>
      </div>
    </Router>
  );
}

export default App;
