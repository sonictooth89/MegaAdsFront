import React from 'react';
import './App.css';

export const App = () => {
 
  return (
    <>
      <header>
        <h1>
          <p><strong>Mega</strong> Ogloszenia</p>
        </h1>
        <button>Dodaj Ogloszenie</button>
        <div className="search">
          <input type="text" /><button>Szukaj</button>
        </div>
      </header>
      <div className="map">
        ...
      </div>
    </>
  );
}

export default App;
