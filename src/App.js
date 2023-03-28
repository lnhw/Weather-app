
import './App.css';
import React, { useState } from 'react';
import { Weather, SearchBox } from './components';
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [height, setHeight] = useState(60);
  return (
    <div className="App">
      <div className="container" style={{ height: `${height}px`, transition:'height 0.6s ease-out' }}>
        <SearchBox setHeight={setHeight} />
        <NotFound />
        <Weather />
      </div>
    </div>
  );
}

export default App;
