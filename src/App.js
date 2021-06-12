import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="*">
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </Router>
  
  );
}

export default App;
