import {useState} from 'react'
import './Join.js';

function Join() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState('');
  
  const inputChange = (e) => {
    setInput(e.target.value);
  }

  const buttonClick = (e) => {
    setNames((prevState) => {
      console.log('names값', prevState);
      return [input, ... prevState];
    })
  }

  return (
    <div className="Join">
    <header className="Join-sub-header">
      <input type="text" value={input} onChange={inputChange}/>
      <button onClick={buttonClick}>UPDATE</button>
      {names.map((name, index) => {
        return <li key={index}>{name}</li>
      })}
    </header>
    </div>
  );
}

export default Join;