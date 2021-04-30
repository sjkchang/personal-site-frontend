import React from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path ="/about" exact component={About}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
