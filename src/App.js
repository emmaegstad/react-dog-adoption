import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Dog from './Dog/Dog';
import Dogs from './Dogs/Dogs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1 className="title">Nibblenoser Pup Adoption</h1>
          <NavLink className="home-link" to="/dogs">
            Back to Home
          </NavLink>
        </header>
      </div>

      <Switch>
        <Route exact path="/">
          <Dogs />
        </Route>
        <Route exact path="/dogs">
          <Dogs />
        </Route>
        <Route exact path="/dogs/:id">
          <Dog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
