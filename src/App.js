import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./component/Router";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Router />
    </div>
    </BrowserRouter>
  );
}

export default App;
