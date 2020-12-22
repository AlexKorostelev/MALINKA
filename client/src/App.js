import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/Main/Main';
import Cabinet from './components/Cabinet/Cabinet';
import HomeList from './components/HomeList/HomeList';

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/cabinet">
          <Cabinet />
        </Route>

        <Route path="/homelist">
          <HomeList />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
