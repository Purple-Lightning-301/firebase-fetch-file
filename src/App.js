import { useState } from "react";
import "./App.css";

function App() {
  const [n, setN] = useState("");
  const [k, setK] = useState("");

  return (
    <div className="App">
      <div className="d-flex px-3 py-3">
        <div style={{minWidth: '300px'}} className='px-3'>
          <div className="d-flex w-100 justify-content-between mt-2">
            <div>Input N = </div>
            <input className="ms-2" type="text"></input>
          </div>
          <div className="d-flex w-100 justify-content-between mt-2">
            <div>Input K = </div>
            <input className="ms-2" type="text"></input>
          </div>
          <div className='mt-2'>
            <button className='rounded'>Submit</button>
          </div>
        </div>
        <div className='w-100 px-3' style={{borderLeft: '1px solid black'}}>
          Content
        </div>
      </div>
    </div>
  );
}

export default App;
