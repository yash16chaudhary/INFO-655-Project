import { useState } from 'react';
import './stylesheet.css';
import OutputDisplay from './OutputDisplay';


function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [units, setUnits] = useState('');
  const weightAsNumber = Number(weight);
  const heightAsNumber = Number(height);

  //Implement in component
  const handleClick = () => {setBmi(weightAsNumber/((heightAsNumber/100)**2));};

  //Organize inline+components

  return (
    <div>
      <h1 style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>BMI Calculator</h1>
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <label>Height(cm):<input value={height} onChange={e => setHeight(e.target.value)} type="number"/>
      </label>
      <label>Weight:(kg)<input value={weight} onChange={e => setWeight(e.target.value)} type="number"/>
      </label>
      </div>

      <p>
        Units:
        <label>
          <input type="radio" name="Metric" value="Metric" defaultChecked={true} onChange={e => setUnits(e.target.value)} checked={units === 'Metric'} />
          Metric
        </label>
        <label>
          <input
            type="radio"
            name="US"
            value="US"
            onChange={e => setUnits(e.target.value)}
            checked={units === 'US'}
            
          />
          US
        </label>
      </p>

      <p>Units {units}</p>


      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <button onClick={() => setWeight(weightAsNumber + 10)}>Gain 10 kg</button>
      <button onClick={() => setWeight(weightAsNumber - 10)}>Lose 10 kg</button>
      </div>
       
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <button onClick={handleClick}>Calculate BMI</button>
      </div>
      <OutputDisplay bmivalue={bmi}></OutputDisplay>
      </div>
  );
}

export default App;
