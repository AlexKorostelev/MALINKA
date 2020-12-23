import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/Main/Main';
import Cabinet from './components/Cabinet/Cabinet';
import HomeList from './components/HomeList/HomeList';
import CabinetHeader from './components/CabinetHeader/CabinetHeader';

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/cabinet">
          <CabinetHeader />
          <Cabinet />
        </Route>

        <Route path="/homelist">
          <CabinetHeader />
          <HomeList />
        </Route>

        <Route>
          404
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
