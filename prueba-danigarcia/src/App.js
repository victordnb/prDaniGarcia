import React from 'react';
import './App.css';

function App() {
  //usaremos un hook para atualizar el estado de la app
  // gits = value (array de strings), setGifts = updateValue

  const GIFS = [
    'https://media2.giphy.com/media/cfuL5gqFDreXxkWQ4o/200w.webp?cid=ecf05e4755by8x8r4vokak51bycewzlogelsdhz4ouqjk5gz&rid=200w.webp&ct=g',
    'https://media2.giphy.com/media/Byp2MtxE5Tyla/giphy.webp?cid=ecf05e4755by8x8r4vokak51bycewzlogelsdhz4ouqjk5gz&rid=giphy.webp&ct=g',
    'https://media3.giphy.com/media/YRtLgsajXrz1FNJ6oy/200w.webp?cid=ecf05e4755by8x8r4vokak51bycewzlogelsdhz4ouqjk5gz&rid=200w.webp&ct=g',
  ]

  const DIFERENTS_GIFS = [
    'https://media0.giphy.com/media/SVYrs1hU0SiAf1nw1n/200.webp?cid=ecf05e4755by8x8r4vokak51bycewzlogelsdhz4ouqjk5gz&rid=200.webp&ct=g',
  ]
    
  const [gifs, setGifs] = React.useState(GIFS)

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} />)
        }
        <button onClick={() => setGifs(DIFERENTS_GIFS)}>Cambiar Gifs</button>
      </section>
    </div>
  );
}

export default App;
