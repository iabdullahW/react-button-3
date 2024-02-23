import  { useState } from 'react';
import "./App.css"

function App() {
  const [greyButtonActive, setGreyButtonActive] = useState(false);
  const [pinkButtonActive, setPinkButtonActive] = useState(false);
  const [yellowButtonActive, setYellowButtonActive] = useState(false);

  const handleGreyButtonClick = () => {
    setGreyButtonActive(!greyButtonActive);
    setPinkButtonActive(false);
    setYellowButtonActive(false);
  };

  const handlePinkButtonClick = () => {
    setPinkButtonActive(!pinkButtonActive);
    setGreyButtonActive(false);
    setYellowButtonActive(false);
  };

  const handleYellowButtonClick = () => {
    setYellowButtonActive(!yellowButtonActive);
    setGreyButtonActive(false);
    setPinkButtonActive(false);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: greyButtonActive ? 'grey' : 'initial',
          color: 'black',
          marginRight: '10px'
        }}
        onClick={handleGreyButtonClick}
        
      >
        Grey Button
      </button>
      <button
        style={{
          backgroundColor: pinkButtonActive ? 'pink' : 'initial',
          color: 'black',
          marginRight: '10px'
        }}
        onClick={handlePinkButtonClick}
      >
        Pink Button
      </button>
      <button
        style={{
          backgroundColor: yellowButtonActive ? 'yellow' : 'initial',
          color: 'black'
        }}
        onClick={handleYellowButtonClick}
      >
        Yellow Button
      </button>
    </div>
  );
}

export default App;
