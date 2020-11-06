import { useEffect, useState } from "react";
import Axios from "axios";

function App() {

  useEffect(() => {
      console.log("Make an API call");
      Axios.get("/api/config")
      .then((response) => {
        console.log(response);
      }).catch((err) => {
        console.log(err)
    });
  },[]);

  return (
    <div className="App">
      <header className="App-header">

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
