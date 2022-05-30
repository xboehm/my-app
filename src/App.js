import logo from './logo.svg';
import './App.css';

const msg = process.env.REACT_APP_0

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to reload.
          Say cheese! Flash. 10
          Coffee is great! Indeed. <br></br>
          v1.1.14<br></br>
          {msg}
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
