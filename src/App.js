import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import favicon from "./logo192.png";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null);
  const allRef = useRef(null);
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = "";
  }; 
 
  function resetResult(e) { 
  	e.preventDefault();
    setResult(0);
  };

  function resetAll(e) {
    e.preventDefault();
    inputRef.current.value = "";
    setResult(0);
  }

  /*function seven(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 7;
    
  }

  function eight(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 8;
    
  }

  function nine(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 9;
   
  }

  function four(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 4;
    
  }

  function five(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 5;
    
  }
 
  function six(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 6;
    
  }

  function one(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 1;
    
  }

  function two(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 2;
    
  }

  function three(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 3;
    
  }

  function zero(e) {
    e.preventDefault();
    inputRef.current.value = inputRef.current.value + 0;
  }*/

  return ( 
    <div className="App"> 
      <div> 
        <h3>
          <img src={favicon}/>
          Harriulator
        </h3> 
      </div> 
      <form> 
        <p className="result" ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="button-div">
          <button onClick={plus}>+</button> 
          <button onClick={minus}>-</button> 
          <button onClick={times}>x</button>
          <button onClick={divide}>÷</button>
          <button onClick={resetInput}>r-input</button>
          <button onClick={resetResult}>r-results</button>
          <button onClick={resetAll}>reset all</button>
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App; 

/*<button onClick={seven}>7</button>
  <button onClick={eight}>8</button>
  <button onClick={nine}>9</button>
  <button onClick={four}>4</button>
  <button onClick={five}>5</button>
  <button onClick={six}>6</button>
  <button onClick={one}>1</button>
  <button onClick={two}>2</button>
  <button onClick={three}>3</button>
  <button onClick={zero}>0</button>
*/