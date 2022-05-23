import { useState } from 'react';
import './App.css';
import MouseHover from './components/MouseHover';

function App() {
  const [toggle,SetToggle] = useState(false)

  return (
    <div className="App">
      <button
        onClick={() => {
          SetToggle(!toggle);
        }}
      >
        Togge
      </button>

      {toggle===false ? <MouseHover /> :""}
    </div>
  );
}

export default App;
