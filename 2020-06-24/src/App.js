import React from "react";

function App({ test }) {
  return (
    <React.Fragment>
      <header className="App-header">
        {test.map((value, index) => (
          <p key={index}>
            Edit <code>src/App.js</code>
            {value} and save to reload.
          </p>
        ))}
      </header>
    </React.Fragment>
  );
}

export default App;
