import { useState } from 'react';
import './stylesheet.css';
import OutputDisplay from './OutputDisplay';


function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const weightAsNumber = Number(weight);
  const heightAsNumber = Number(height);

  //Implement in component
  const handleClick = () => {var mybmi=weightAsNumber/((heightAsNumber/100)**2);setBmi(mybmi)};

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
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <button onClick={() => setWeight(weightAsNumber + 10)}>Gain 10 pounds</button>
      <button onClick={() => setWeight(weightAsNumber - 10)}>Lose 10 pounds</button>
      </div>
       
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
      <button onClick={handleClick}>Calculate BMI</button>
      </div>
      <OutputDisplay title={bmi}></OutputDisplay>
      </div>
  );
}

export default App;
