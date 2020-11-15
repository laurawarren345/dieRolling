import React from "react";
import "./App.css";
import DieWithConnect from "./ui/DieWithConnect";
import ButtonRandomRollWithConnect from "./ui/ButtonRandomRollWithConnect";
import ButtonSetValueWithConnect from "./ui/ButtonSetValueWithConnect";
import DieWithHooks from "./ui/DieWithHooks";
import ButtonRandomRollWithHooks from "./ui/ButtonRandomRollWithHooks";
import ButtonSetValueWithHooks from "./ui/ButtonSetValueWithHooks";

function App() {
  return (
    <div className="App">
      {/* <h1 style={{ marginTop: "150px" }}>Using the "connect" style</h1>
      <DieWithConnect />
      <ButtonRandomRollWithConnect />
      <ButtonSetValueWithConnect /> */}

      <h1 style={{ marginTop: "150px" }}>Using the "hooks" style</h1>
      <DieWithHooks />
      <ButtonRandomRollWithHooks />
      <ButtonSetValueWithHooks />
    </div>
  );
}

export default App;
