import React from 'react'
import ReactDOM from 'react-dom'

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