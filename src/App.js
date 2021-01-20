import './App.css';
import {useState} from 'react';

function App() {
  const [height,setHeight] = useState(0);
  const [weight,setWeight] = useState(0);
  const [bmi,setBmi] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const result = parseFloat(weight / (height * height)).toFixed(1);
    setBmi(result);
    // also setBmiweight / (height * height);
  }

  return (
    <div className="container" style={{marginTop: 30}}>
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Calculating body mass index</h2>
        <label>Height</label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div>
      <label>Weight</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Your BMI:</label>
        <output className="form-control">{bmi}</output>
      </div>
      <button className="btn btn-primary">Calculate</button>
    </form>
    </div>
  );
}

export default App;
