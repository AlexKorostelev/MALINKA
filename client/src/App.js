import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header/Header'
import Main from './Main/Main'
import Cabinet from './Cabinet/Cabinet'

function App() {
  return (
    <Router>
      <Header />

      <Switch>

        <Route exact path='/'>
          <Main />
        </Route>

        <Route path='/cabinet'>
          <Cabinet />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
