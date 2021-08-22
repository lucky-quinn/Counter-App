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
  const reset=()=>{
    setNUM(0)
  }
  return (
    <div>
      <header id="header"> Counter App </header>
      <div id="main__container">
        <div id="txt">
          <h1>{num}</h1>
        </div>
         <div id="btn__collection">
           <span>
              <a  id="add" onClick={increment}></a>
            </span>
            <span>
              <a  id="sub" onClick={decrement}></a>
           </span>
           <span>
              <a  id="reset" onClick={reset}></a>
           </span>
         </div>

       </div>
     </div>
  );
}

export default App;
