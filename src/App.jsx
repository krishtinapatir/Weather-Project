import React, { useState } from 'react';
import Weather from './components/Weather';

const App = () => {
  const [bgImage, setBgImage] = useState("");

  return (
    <div
      className="App"
      style={{backgroundImage: `url(${bgImage})`}}
    >
      <Weather setBgImage={setBgImage} />
    </div>
  );
};

export default App;

