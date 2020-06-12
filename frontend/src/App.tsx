import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


interface AppProps {}

function App({}: AppProps) {
  const [ result, updateResult ] = React.useState("");
  
  React.useEffect( () => {
    async function fetchMyApi() {
      const response = await fetch('http://localhost:3000/');
      const result = await response.json();
      updateResult( result );
    }
    fetchMyApi()
  }, [] );
  let activateLasers = function () { alert('hi') };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fetching gave us: { result }
        </p>
        <a href='/creategame'>Create game!</a>
        <a href='/mygames'>My games</a>
        <button onClick={activateLasers}>  Activate Lasers
</button>
      </header>
    </div>
  );
}

export default App;
