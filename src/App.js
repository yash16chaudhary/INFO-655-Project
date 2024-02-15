import { useState } from 'react';


function App() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const weightAsNumber = Number(weight);


  return (
    <>
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
        <button onClick={() => setWeight(weightAsNumber + 10)}>
          Add 10 pounds
        </button>
      </label>
      {height !== '' &&
        <p>Your height is {height}.</p>
      }
      {weight > 0 &&
        <p>Your weight is {weightAsNumber}.</p>
      }
      {weight > 0 &&
        <p>Your BMI {weightAsNumber/((height/100)**2)}.</p>
      }
    </>
  );
}

export default App;
