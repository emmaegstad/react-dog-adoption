import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Dog from './Dog/Dog';
import Dogs from './Dogs/Dogs';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <NavLink to="/dogs">Home</NavLink>
        </header>
      </div>

      <Switch>
        <Route exact path="/" component={Dogs} />
        <Route exact path="/dogs" component={Dogs} />
        <Route exact path="/dogs/:id" component={Dog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
