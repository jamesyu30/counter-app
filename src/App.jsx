import { useState } from 'react'

import './App.css'
import Display from './Display';
import Button from './Button';

function App() {
  const [vanillaCount, setVanillaCount] = useState(0);
  const [chocolateCount, setChocolateCount] = useState(0);
  const [strawberryCount, setStrawberryCount] = useState(0);

  const incrementVanilla = () => {
    setVanillaCount(vanillaCount + 1);
  };
  
  const incrementChocolate = () => {
    setChocolateCount(chocolateCount + 1);
  };

  const incrementStrawberry = () => {
    setStrawberryCount(strawberryCount + 1);
  };

  return (
    <>
      <h1>Ice Cream Counter</h1>
          <p>Vote for your favorite ice cream flavor!</p>
          <div className="counters">
            <div>
            <h2 className='vanilla-header'>Vanilla</h2>
            {vanillaCount === 0 ? (
                <Display count={"N/A"} />
              ) : (
                <Display count={vanillaCount} />
            )}
            <Button label="Vote" onClick={incrementVanilla} />
          </div>
          <div>
            <h2 className='chocolate-header'>Chocolate</h2>
            {chocolateCount === 0 ? (
              <Display count={"N/A"} />
            ) : (
              <Display count={chocolateCount} />
            )}
            <Button label="Vote" onClick={incrementChocolate} />
          </div>
          <div>
            <h2 className='strawberry-header'>Strawberry</h2>
            {strawberryCount === 0 ? (
              <Display count={"N/A"} />
            ) : (
              <Display count={strawberryCount} />
            )}
            <Button label="Vote" onClick={incrementStrawberry} />
          </div>
      </div>
    </>
  )
}

export default App
