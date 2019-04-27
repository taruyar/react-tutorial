import React from 'react';
import PropTypes from 'prop-types';

const users = [
{
  name: 'Anthony',
  age: 10,
},
{
  name: 'John',
  age: 30
},
{
  name: 'Michael',
  age: 50,
},
{
  name: 'Chad',
  age: 35,
},
]

// User.defaultProps = {
//   name: 'no name',
//   age: 100
// }

const App = () => {
  const profiles = users;
  return(
    <div>
      {
        profiles.map((profile, index)=>{
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}. Currently {props.age} years old.</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired

}

// const App = () => {
//   return(
//     <div>
//       <User name={"Anthony"} age={10}/>
//       <User name={"John"} age={10}/>
//       <User name={"Michael"} age={10}/>
//       <User name={"Chad"} age={10}/>
//     </div>
//   )
// }

// const User = (props) => {
//   return <div>Hi, I am {props.name}. Currently {props.age} years old.</div>
// }

export default App;
