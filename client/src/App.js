import './App.scss';
import NoMatch from './components/NoMatch/NoMatch';
import HomePage from './components/HomePage/HomePage';
import CallPage from './components/CallPage/CallPage';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router> 
        <Switch>
          <Route exact path="/:id">
            <CallPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
