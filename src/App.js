import React, { useEffect, useState } from 'react';
import './App.css';
import get3Words from './services/get3Words';
import Gif from './components/Gif';


function App() {
  const [catFact, setCatFact] = useState([]);
  useEffect(function () {
  const catFactWords = get3Words();
  catFactWords.then(catFact => {
    setCatFact(catFact);
  });
  }, []);

  
  const handleClick = () => {
    window.location.reload();
  }


  return (
    <div className="App">
      <section className="App-content">
        {
          <Gif params={catFact}/>          
        }
        <button onClick={handleClick}>Click me!</button>
       
      </section>
    </div>
  );
}

export default App;
