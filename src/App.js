import { useState } from 'react';


function App() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const weightAsNumber = Number(weight);


  return (
    <div>
      <h1 style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>BMI Calculator</h1>
      <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>
      <label>
        Height(m):
        <input
          value={height}
          onChange={e => setHeight(e.target.value)}
          type="number"
        />
      </label>
      <label>
        Weight:
        <input
          value={weight}
          onChange={e => setWeight(e.target.value)}
          type="number"
        />
        </label>
        </div>
        <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}} >
        <button onClick={() => setWeight(weightAsNumber + 10)}>
          Gain 10 pounds
        </button>
        <button onClick={() => setWeight(weightAsNumber - 10)}>
          Lose 10 pounds
        </button>
        </div>
      
      {height !== '' &&
        <p>Your height is {height}.</p>
      }
      {weight > 0 &&
        <p>Your weight is {weightAsNumber}.</p>
      }
      {weight > 0 &&
        <p>Your BMI {weightAsNumber/((height/100)**2)}.</p>
      }
    </div>
  );
}

export default App;
