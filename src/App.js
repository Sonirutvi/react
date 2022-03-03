import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Welcome from './Props/welcome';
import Clock from './Props/function';

function App() {
  function tick () {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // ReactDOM.render(element, document.getElementById('root'));
    
  }
  setInterval(tick, 1000);
  return (
    <div className="App">
      <Welcome name = "Rutvi" address = "Ahmedabad" />
      {/* <Clock/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
