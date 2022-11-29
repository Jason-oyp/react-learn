import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState(123)
  return (
    <div className="App">
      <input type="text" readOnly value={value} />
      <button onClick={() => {
        setValue(234)
      }}>button</button>
    </div>
  );
}

export default App;
