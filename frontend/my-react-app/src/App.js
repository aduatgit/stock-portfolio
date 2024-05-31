import logo from "./logo.svg";
import "./App.css";
import React from "react";

import LineGraph from "./components/Line_Graph.jsx";

export function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

function App() {
  return (
    <div className="App">
      <LineGraph />
      <Button></Button>
    </div>
  );
}

export default App;
