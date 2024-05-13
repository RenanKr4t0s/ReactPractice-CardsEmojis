import React from "react";
import CardBuilder from "./CardBuilder";
import emojipedia from "../emojipedia"

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>       
      <CardBuilder
        array = {emojipedia}
       />
    </div>
  );
}

export default App;
