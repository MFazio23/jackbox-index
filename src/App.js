import React from 'react';
import './App.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import JackboxIndex from "./JackboxIndex";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <main>
        <JackboxIndex />
      </main>
    </div>
  );
}

export default App;
