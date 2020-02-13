import React from 'react';
import A from './components/A'
import B from './components/B'
import WithLog from './components/HOC/WithLog'
const NewA = WithLog(A);
const NewB = WithLog(B);
function App() {
  return (
    <div className="App">
      <NewA a={"a"} />
      <NewB b={"b"} />
    </div>
  );
}

export default App;
