import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import Welcome from './Props/welcome';
import Clock from './Props/function';
import NumberList from './Props/list_keys';
import Greeting from './Props/condition_render';
import Mailbox from './Props/condition_render';
import MyForm from './Props/forms';
import Calculator from './Props/calculator';
import FancyBorder from './Props/fancyborder';
import WelcomeDialog from './Props/dialog';
import SignUpDialog from './Props/signupdialog';
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
  const numbers = [1, 2, 3, 4, 5];
  const messages = ['React', 'Re: React', 'Re:Re: React'];
 
  return (
    <div className="App">
      {/* <Welcome name = "Rutvi" address = "Ahmedabad" /> */}
      {/* <Clock/> */}
      {/* {listItems} */}
      {/* <NumberList numbers={numbers} /> */}
      {/* <Greeting isLoggedIn={false} /> */}
      {/* < Mailbox unreadMessages ={messages} /> */}
      {/* <MyForm/> */}
      {/* <Calculator/> */}
      {/* <WelcomeDialog/> */}
      <SignUpDialog/>

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
