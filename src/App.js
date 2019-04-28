import React, { Component } from 'react';

// User.defaultProps = {
//   name: 'no name',
//   age: 100
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0}
  };

  handleAddition = () => {
    this.setState({count: this.state.count + 1})
  };

  handleSubtraction = () => {
    console.log('minus called')
    this.setState({count: this.state.count - 1})
  };
  render(){
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handleAddition}>
        +
        </button>
        <button onClick={this.handleSubtraction}>
        -
        </button>
      </React.Fragment>
    )
  }
}

export default App;

