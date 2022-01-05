import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Dog from './Dog/Dog';
import Dogs from './Dogs/Dogs';
import Admin from './Admin/Admin';
import Edit from './Edit/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <h1 className="title">Nibblenoser Pup Adoption</h1>
          <div className="nav-links">
            <NavLink className="home-link" to="/dogs">
              Home
            </NavLink>
            <NavLink className="admin-link" to="/admin">
              Admin
            </NavLink>
          </div>
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
        <Route exact path="/dogs/:id/edit">
          <Edit />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
