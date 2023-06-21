import React,{useState} from 'react';
import './App.css';

function App() {
 
const [inputVal, setInputVal] = useState("");
const [stateColor, setStateColor] = useState("black");

const handleColorChange = (e) => {
  setStateColor(e.target.value);
}

//If we dont want to count space only character✅
const handleCharacterCount = () => {
  const onlyChar = inputVal.split(" ").join("");
  return onlyChar.length ;
}

  return (
    <div className="App">
      <h1>Task</h1>
      <input type="text" style={{color: stateColor}} value={inputVal} onChange={(e)=>setInputVal(e.target.value)} placeholder="start typing" />
      <select onChange={handleColorChange}>
        <option>Black</option>
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </select>
      <p>{inputVal.length}</p>
      <p>CharacterCount : {handleCharacterCount()}</p>
    </div>
  );
}

export default App;
