import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './components/Main/Main';
import Cabinet from './components/Cabinet/Cabinet';
import HomeList from './components/HomeList/HomeList';
import UserRoute from './components/routes/UserRoute';

function App() {
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <UserRoute path="/cabinet" component={Cabinet} />

        <Route path="/homelist" component={HomeList} />

        <Route>
          404
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
