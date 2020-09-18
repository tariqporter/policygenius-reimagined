import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalFonts from 'fonts/fonts.js';
import Header from 'components/Header';
import Home from 'components/Home';
import SelectProduct from 'components/SelectProduct';

function App() {
  return (
    <Router>
      <GlobalFonts />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <SelectProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
