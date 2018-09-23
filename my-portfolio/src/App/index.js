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
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
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
