import './App.css';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import ResizeErrorHandler from './ResizeObserrverErrHandler';
import OnKeyEvent from './KeyEvent';
import Videos from "./videos.json"

function App() {

  const [key, setKey] = useState("");

  useEffect(OnKeyEvent("keydown", (e) => setKey(e.key)))
  useEffect(ResizeErrorHandler);

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <p>Key Pressed: {key} </p>
        <ReactPlayer url={Videos.spiderman} controls/>
      </header>
    </div>
  );
}

export default App;
