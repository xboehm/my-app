import logo from './logo.svg';
import './App.scss';

const msg = process.env.REACT_APP_1
const pic = process.env.REACT_APP_LOGO

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

          Edit <code>src/App.js</code> and save to reload.
          Say cheese!
          Coffee is great! Indeed. <br></br>
          v1.1.19<br></br>
          {msg} {pic}
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
