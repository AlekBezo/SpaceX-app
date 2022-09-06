import React from "react";
import { Link, Router } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Space X GraphQl App</h1>
      <Card />
    </>
  );
}

export default App;
