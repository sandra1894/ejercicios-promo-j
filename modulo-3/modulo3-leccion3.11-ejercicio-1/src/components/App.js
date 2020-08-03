import React from "react";
import "../stylesheet/App.css";
import { Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Pricing from "./Pricing";
import Home from "./Home";
import About from "./About";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
