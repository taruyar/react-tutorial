import React from 'react';

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

},
{

},
]

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


User.defaultProps = {
  name: 'no name',
  age: 100
}