import logo from './logo.svg';
import './App.css';

function App() {

  const callBackend = async () => {
    try {
      const response = await fetch("/api/hello");
      const data = await response.text();
      alert(data);
    } catch (error) {
      alert("Backend not reachable");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          React + Jenkins + .NET CI/CD (Jenkins)    shiv
            
        </p>

        <button
          onClick={callBackend}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Call Backend API
        </button>

        <br /><br />

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
