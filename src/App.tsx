import React from "react";
import { Mynote } from "./components/Mynote";

// import  {Noteapp} from './components/Noteapp';

import "./App.css";

function App() {
  return (
    <div className="container">
      {/* <Noteapp name="pawan"/> */}
      <Mynote />
    </div>
  );
}

export default App;
