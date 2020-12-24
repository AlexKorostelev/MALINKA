import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Main from './components/Main/Main';
import Cabinet from './components/Cabinet/Cabinet';
import HomeList from './components/HomeList/HomeList';
import UserRoute from './components/routes/UserRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <UserRoute path="/cabinet" component={Cabinet} />

          <UserRoute path="/homelist" component={HomeList} />

          <Route>
            <PageNotFound />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
