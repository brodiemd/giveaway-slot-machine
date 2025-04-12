import { useState } from 'react';
import './App.css';

// Array of prizes (you can replace these with images or your own prizes)
const prizes = [
  'Prize 1',
  'Prize 2',
  'Prize 3',
  'Prize 4',
  'Prize 5',
  'Prize 6',
  'Prize 7',
  'Prize 8',
  'Prize 9',
  'Prize 10',
  'Prize 11',
  'Prize 12',
  'Prize 13',
  'Prize 14',
  'Prize 15'
];

function App() {
  const [prize, setPrize] = useState(null);
  const [hasSpun, setHasSpun] = useState(false);

  // Function to handle the spinning logic
  const handleSpin = () => {
    if (hasSpun) return; // Prevent spinning again

    const randomIndex = Math.floor(Math.random() * prizes.length);
    setPrize(prizes[randomIndex]);
    setHasSpun(true);
  };

  // Reset the spin
  const resetSpin = () => {
    setHasSpun(false);
    setPrize(null);
  };

  return (
    <div className="App">
      <h1>Giveaway Slot Machine</h1>
      <div className="wheel">
        <button onClick={handleSpin} disabled={hasSpun} className="spin-button">
          Spin the Wheel
        </button>
        {prize && !hasSpun && <div className="prize">{prize}</div>}
        {hasSpun && (
          <div className="result">
            <h2>Congratulations! You won:</h2>
            <p>{prize}</p>
            <button onClick={resetSpin} className="reset-button">Spin Again</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

