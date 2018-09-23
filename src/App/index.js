import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProjectsPage from '../ProjectsPage';
import ContactPage from '../ContactPage';
import Home from '../Home';
import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <nav className="navbar">
            <div>
              <span className="logo">D.A.S</span>
            </div>
            <div className="nav-links">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/contact">Contact</Link>
              <Link className="link" to="/projects">Projects</Link>
            </div>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
      </Router>
    )
  }
}

export default App;
