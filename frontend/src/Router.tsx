import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchAPI } from './Api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CreateGame() {
    const [ roles, updateRoles ] = React.useState([]);
  
    React.useEffect( () => {
      async function fetchRoles() {
        const roles = await fetchAPI('/game/roles')
        updateRoles( roles );
      }
      fetchRoles()
    }, [] );
    return (
    <form>
        <h1>Create game</h1>
        <div>hi</div>
        <ul>
            { roles.map(item => (
                <li key={item}>{item}</li>
            )) }
        </ul>
    </form>
    )
}

function MyGames() {
    return <h1>My games</h1>
}

function FrontendRouter() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to='/creategame'>Create game!</Link>
            <Link to='/mygames'>My games</Link>
        </header>
        <Switch>
          <Route path="/creategame">
            <CreateGame />
          </Route>
          <Route path="/mygames">
            <MyGames />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default FrontendRouter;