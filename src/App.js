import './App.css';
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import ResizeErrorHandler from './ResizeObserrverErrHandler';
import OnKeyEvent from './KeyEvent';
import Videos from "./videos.json";
import List from './List';
import logo from "./logo.svg"

function App() {
  const [key, setKey] = useState("");

  useEffect(OnKeyEvent("keydown", (e) => setKey(e.key)))
  useEffect(ResizeErrorHandler);

  return (
    <div className="App">
      <header className="App-header">
        <br/>
        <p>Key Pressed: {key} </p>
        {Object.values(Videos).map(category =>
          <List 
            title={category.category} 
            shows={category.shows} 
            key={category.category}></List>
        )}
      </header>
    </div>
  );
}



export default App;
