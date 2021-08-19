import { useState } from 'react';
import './App.css';

function App() {
  let [num,setNUM]=useState(0)

  const increment=()=>{
    setNUM(num+1)
  }

  const decrement=()=>{
    setNUM(num-1)
  }
  return (
    <div>
      <div id="main__container">
        <h1>{num}</h1>
         <div id="btn__collection">
            <button onClick={increment}>ADD</button>
           <button onClick={decrement}>SUB</button>
         </div>
       </div>
     </div>
  );
}

export default App;
