import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Booksearch from './components/Booksearch';
import PersonalBookshelf from './components/PersonalBookshelf';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Booksearch} />
        <Route path="/bookshelf" component={PersonalBookshelf} />
      </Switch>
    </Router>
  );
};

export default App;
