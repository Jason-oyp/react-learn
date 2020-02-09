import React from 'react';
import Pager from './component/Pager'
class App extends React.Component {
  state = {
    current: 1,
    total: 10,
    limit: 4,
    planeNumber: 5
  }
  render() {
    return (
      <div className="App">
        <Pager {...this.state}
          onChangeCurrent={newPage => {
            if (newPage === this.current) {
              return;
            }
            this.setState({
              current: newPage
            });
          }} />
      </div>
    );
  }
}

export default App;
