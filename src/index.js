import React from 'react'
import ReactDOM from 'react-dom'

//arrow function review 
// function(a) {
//   return a + 100; 
// }

//1. remove the word "function" and place arrow between the argument and opening body bracket 
// (a) => {
//   return a + 100; 
// }

//2. remove the body brackets and word "return"  -- the return is implied 
// (a) => a + 100; 

//3. remove the argument parentheses
// a => a + 100; 




const t = [1,2,3]
//map creates a new array which the function given as a parameter is used to create the items. 
const m1 = t.map(value => value * 2)
//function (value) {
//   return value * 2; 
// }
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

const Hello = (props) => {
  return (
    <div>
      <p> Hello  {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      This is a footer
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1> Greetings </h1>
      <Hello name = "George" age = {26+10} />
      <Hello name = "Daisy"  age = {10}/>
      <Hello name = {name} age = {age} />
      <Footer />
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
// const App = () => {
//   console.log('Hello from component')

//   const now = new Date()
//   const a = 10 
//   const b = 20 

//   return React.createElement(
//     'div',
//     null, 
//     React.createElement(
//       'p', null, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p' , null, a ,' plus ' , b, ' is ', a + b
//     )
//   )
//     }
    // <div> 
    //   <p>Hello World , it is {now.toString()}</p>
    //   <p>
    //     {a} plus {b} is {a + b}
    //   </p>
    // </div>

ReactDOM.render(<App/>, document.getElementById('root'))