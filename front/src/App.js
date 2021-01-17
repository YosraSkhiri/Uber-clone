import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/style/sass/style.scss';
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
