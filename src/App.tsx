import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Game from "./pages/Game";

// import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">regster</Link>
          </li>
          <li>
            <Link to="/games/12345">game</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/registration" component={Registration} />
      <Route path="/games/:type" component={Game} />
    </div>
  );
};

export default App;
