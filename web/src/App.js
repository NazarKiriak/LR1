import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Title />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
