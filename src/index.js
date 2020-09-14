//the application imports the useState function from the function body that defines the component : 
//const [counter, setCounter] = useState(0)
import React , {useState} from 'react'
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


// const t = [1,2,3]
// //map creates a new array which the function given as a parameter is used to create the items. 
// const m1 = t.map(value => value * 2)
// //function (value) {
// //   return value * 2; 
// // }
// // console.log(m1)

// const m2 = t.map(value => '<li>' + value + '</li>')
// // console.log(m2)


// //object literals 

// const object1 = {
//   name:"arto hellas",
//   age: 35, 
//   education: 'phd'
// }

// const object2 = {
//   name: 'full stack web application development', 
//   level: 'intermediate studies',
//   size: 5,
// }

// const object3 = {
//   name: {
//     first: 'dan', 
//     last: 'abramov',
//   }, 
//   grades: [2,3,5,3],
//   department: 'Stanford University',
// }

// // console.log(object1.name)
// // console.log(object2.name);
// // console.log(object3.name);

// const fieldName = 'age'
// // console.log(object1[fieldName])

// //object methods and this   - brief overview as newer versions of react use hooks where there is no need for defining objects with methods 
// //we can assign methods to an object by defining properties that are functions 

// const arto = {
//   name: 'Arto Hellas', 
//   age: 35, 
//   education: 'PhD',
//   greet: function(){
//     console.log('hello, my name is ' + this.name)
//   },
//   doAddition: function(a,b){
//     console.log(a + b)
//   }
// }

// arto.greet()
// const referenceToGreet = arto.greet
// referenceToGreet() //this is undef

// setTimeout(arto.greet, 1000) //hello my name is 

// //mechanisms to preserve the original this 
// //1. bind 
// setTimeout(arto.greet.bind(arto), 1000) // hello my name is arto hellas



//storing a method reference in a variable and calling the method through the variable:
// arto.doAddition(1,4) // prints 5
// const referenceToAddition = arto.doAddition
// referenceToAddition(10,15) // prints 25

//methods can be assigned to objects even after the creation of the object 
// arto.growOlder = function(){
//   this.age +=1
// }

// arto.greet()
// arto.growOlder()
// console.log(arto.age)

// Classes 
// class Person{
//   constructor (name, age){
//     this.name = name
//     this.age = age
//   }
//   greet(){
//     console.log('hello, my name is ' + this.name)
//   }
// }

// const adam = new Person ('Adam Ondra', 35)
// // adam.greet()

// const nayo = new Person ('Nayo', 30)
// // nayo.greet()

//end js review 

//The person's age does not have to be passed as a parameter to the function, since it can directly access all props that are passed to the component.
// const Hello = ({name,age}) => {
  //The props that are passed to the component are now directly destructured into the variables name and age.
  // This means that instead of assigning the entire props object into a variable called props and then assigning its properties into the variables name and age
  // we assign the values of the properties directly to variables by destructuring the props object that is passed to the component function as a parameter:
  // const {name, age} = props
  // const name = props.name
  // const age = props.age

//   const bornYear = () => new Date().getFullYear() - age;

//   // const bornYear = () => {
//   //   return new Date().getFullYear() - age;
//   // };

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old.
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// }

// const Footer = () => {
//   return (
//     <div>
//       This is a footer
//     </div>
//   )
// }

// const App = (props) => {
//   // const name = 'Peter'
//   // const age = 10
//   return (
//     <div>
   
//       {/* <h1> Greetings </h1> */}
//       {/* <Hello name = "George" age = {26+10} />
//       <Hello name = "Daisy"  age = {10}/>
//       <Hello name = {name} age = {age} />
//       <Footer /> */}
//     </div>
//   )
// }

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
  }

  const Button = ({handleClick, text})=>{
    return (
      <button onClick = {handleClick}>
        {text}
      </button>
    )
  }

const App = () => {
  //The function call adds state to the component and renders it initialized with the value of zero.
  //The counter variable is assigned the initial value of state which is zero. The variable setCounter is assigned to a function that will be used to modify the state.
  const [counter, setCounter] = useState(0);

  //the buttons attribute onClick value is set to the value to increment the counter. In simple functions, its fine. However, in more complex event handlers, it better to sep. the event handler to a sep. function
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  //The application calls the setTimeout function and passes it two parameters: a function to increment the counter state and a timeout of one second:
  // react re-renders the component which means that the function body of the component function gets re-executed when setCounter is called 
  // the second time the component function is executed, it calls the useState function and returns the new value of the state : 1 
  // setTimeout(() => setCounter(counter + 1), 1000);


  //debug 
  // console.log('rendering ... ' , counter)

  return (
    <div>
      {/* <div>{counter}</div> */}
      <Display counter={counter} />
      <p>Pressing buttons will increment, reset, or decrement the counter: </p>
      {/* <button onClick={increaseByOne}>plus</button> */}
      <Button handleClick={increaseByOne} text="Plus" />
      {/* <button onClick = {setToZero}> */}
      <Button handleClick={setToZero} text="Reset" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
}

// let counter = 1

ReactDOM.render(<App />, document.getElementById('root'))

// refresh()
// counter +=1
// refresh()
// counter +=1
// refresh()

// setInterval(() => {
//   refresh()
//   counter +=1
// },1000)
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




// ReactDOM.render(<App/>, document.getElementById('root'))