import { useState } from 'react';
import './App.css';

// Array of prizes (replace these with your actual prizes or images)
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
  const [spinning, setSpinning] = useState(false);
  const [spinClass, setSpinClass] = useState(''); // To control the wheel spin animation

  // Function to handle the spinning logic
  const handleSpin = () => {
    if (spinning || hasSpun) return; // Prevent spinning if already spinning or already spun

    setSpinning(true);
    setSpinClass('spin'); // Trigger the spinning animation

    // Set a random prize after the animation delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prizes.length);
      setPrize(prizes[randomIndex]);
      setHasSpun(true);
      setSpinning(false);
    }, 3000); // 3 seconds for the spinning animation
  };

  // Reset the spin
  const resetSpin = () => {
    setHasSpun(false);
    setPrize(null);
    setSpinClass(''); // Reset the spin animation
  };

  return (
    <div className="App">
      <h1>Giveaway Slot Machine</h1>
      <div className="slot-machine">
        <div className={`slots ${spinClass}`}>
          {prizes.map((prize, index) => (
            <div className="slot" key={index}>
              {prize}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleSpin}
        disabled={hasSpun}
        className="spin-button"
      >
        Spin the Wheel
      </button>
      {prize && hasSpun && (
        <div className="result">
          <h2>Congratulations! You won:</h2>
          <p>{prize}</p>
          <button onClick={resetSpin} className="reset-button">
            Spin Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
