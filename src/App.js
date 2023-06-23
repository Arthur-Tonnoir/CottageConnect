import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/users")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                else {
                    throw new Error("Erreur de api backend");
                }
            })
            .then((data) => setData(data))
            .catch((error) => console.error("Erreur lors de la reuperation des données", error));
      
    }, []);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
