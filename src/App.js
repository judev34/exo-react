import React, { useState } from 'react';
import Navbar from './composants/Navbar';
import WindowContent from './composants/WindowContent';
import './App.css';


const App = () => {

  const [contentIndex, setContentIndex] = useState(0);

  return (
    <div className="App">
      <nav className="App-nav">
        <Navbar callback = {(e) => setContentIndex(e)} />
      </nav>
      <main className='Main-content'>
        <WindowContent 
        selectedIndex = {contentIndex} />
      </main>
    </div>
  );
}

export default App;
