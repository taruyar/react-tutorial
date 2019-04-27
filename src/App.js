import React from 'react';


class App extends React.Component{
  render(){
    const greeting = 'Hi, ';
    const dom = <h1 className=''>{greeting}hello react</h1>
    return (
      <div>
        <h1>{dom}</h1>
        <input type='text' 
          onClick={()=>{console.log('clicked')}}
        />
        <label htmlFor='bar'>bar
        </label>
      </div>
    )
  }
}
// function App() {
//   const dom = <h1>Hello, World</h1>;
//   return dom;
// }
/*
class App extends Component{
  rener() {
    return React.createElement(
      'div',
      null,
      'hello world'
    )
  }
}
}
 */

export default App;

