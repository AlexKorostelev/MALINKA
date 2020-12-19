import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main'
import Cabinet from './components/Cabinet/Cabinet'

function App() {
  return (
    <Router>

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

export default App
