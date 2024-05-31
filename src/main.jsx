//import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
//import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { CounterApp } from '../src/01-useState/CounterApp' import {
// CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <MultipleCustomHook />
  //</React.StrictMode>
);
