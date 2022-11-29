import React from 'react';
import ThreeLayout from './components/ThreeLayout';

function App() {
  return (
    <div className="App">
      <ThreeLayout
        left={
          <div>我是左侧栏</div>
        }
        right={
          <div>我是右侧栏</div>
        }
      >
        <div>我是主区域</div>
      </ThreeLayout>
    </div>
  );
}

export default App;
