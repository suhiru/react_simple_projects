import React, { use } from 'react';
import { useState } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#000000');
  const [typeColor, setTypeColor] = useState('hex');

  const genrateRandomNumbers = (length) => {
    return Math.floor(Math.random() * length);
  };

  const createHexColor = () => {
    let hexColor = '#';
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    for (let i = 0; i < 6; i++) {
      hexColor += hex[genrateRandomNumbers(hex.length)];
    }

    setTypeColor('hex');
    setColor(hexColor);
  };

  const createRGBColor = () => {
    let r = genrateRandomNumbers(256);
    let g = genrateRandomNumbers(256);
    let b = genrateRandomNumbers(256);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;

    setTypeColor('rgb');
    setColor(rgbColor);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => setTypeColor('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeColor('rgb')}>Create RGB Color</button>
      <button onClick={typeColor === 'hex' ? createHexColor : createRGBColor}>
        Generate random color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '2rem',
            fontWeight: 'bold',
            marginTop: '20px',
          }}
        >
          {typeColor}
        </h1>
        <h1 style={{ color: '#fff', fontSize: '1.5rem', margin: '10px' }}>
          {color}
        </h1>
      </div>
    </div>
  );
};

export default RandomColor;
