import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [ advice, setAdvice ] = useState('');

  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((data) => {
      setAdvice(data.data.slip.advice);
    })
    .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchAdvice();
  }, [])

  return (
    <div className="App">
      <div className='card'>
        <h1 className='heading'> {advice} </h1>
        <button className='button' onClick={() => fetchAdvice()}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
