import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css'


function XoxGameComponent(){
  const [games, setGames] = useState([]);
  const [mark, setMark] = useState("X");
  const [message, setMessage] = useState("");
  const [isGameFinish, setIsGameFinish] = useState(false);

  useEffect(()=> {
    newGame();
  }, [])

  const newGame = () =>{
    setGames([
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]);
    setIsGameFinish(false);
    setMark("X");
    setMessage("Hamle Sırası: " + mark);
  }

  return(
    <>
    <div className='container text-center'>
      <h1>XOX Oyunu</h1>
      <h2 className='alert alert-warning'>
        {message}
      </h2>
      <button className='btn btn-outline-primary w-100'>
        Yeni Oyun
      </button>
      <div className='row mt-2'>
        {games.map((game, index) => (
          <div
          key={index}
          className="col-md-4 box">
            {game}
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <XoxGameComponent/>
);

reportWebVitals();
