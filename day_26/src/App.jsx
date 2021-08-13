import { useState } from "react";
import './App.css';
import {incNumber, decNumber} from "./actions";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter app using react-redux.</h1>
      <button onClick={() => {
        dispatch(decNumber())
      }} >-</button>
      <span>{count}</span>
      <button onClick={() => {
        dispatch(incNumber())
      }} >+</button>

    </div>
  );
}

export default App;
