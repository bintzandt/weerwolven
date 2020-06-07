import * as React from 'react';
import logo from './logo.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [ result, updateResult ] = React.useState("");
  
  React.useEffect( () => {
    async function fetchMyApi() {
      const response = await fetch('http://localhost:3000');
      const result = await response.json();
      updateResult( result );
    }
    fetchMyApi()
  }, [] );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fetching gave us: { result }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
