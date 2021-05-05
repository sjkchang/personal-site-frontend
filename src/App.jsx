import React from 'react';
import './components/styles/App.css';
import Nav from './components/Nav';
import Footer from'./components/Footer';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path ="/" exact component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}
export default App;
