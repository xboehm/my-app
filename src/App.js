import logo from './logo.svg';
import './App.css';

const msg = process.env.REACT_APP_1
const pic = process.env.REACT_APP_LOGO

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
        <script>

          var img = document.createElement("img");
          img.src = "./{pic}";

          var div = document.getElementById("x");
          div.appendChild(img);
          //block.setAttribute("style", "text-align:center");

    </script>
      </header>
    </div>
  );
}

export default App;
