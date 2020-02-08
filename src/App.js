import React from 'react';
import StudentList from './StudentList'
import findAllStudents from './studentService'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: []
    }
  }
  componentDidMount() {
    findAllStudents().then(res => {
      this.setState({
        datas: res
      });
    });
  }
  render() {
    return (
      <div className="App">
        <StudentList students={this.state.datas}></StudentList>
      </div>
    );
  }
}

export default App;
