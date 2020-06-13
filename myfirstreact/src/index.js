import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//This is when the component is defined in some other file.
// import Car from './app.js';


// render JSX component
// const JSX = (
//   <div>
//     <h1 > Hello World < /h1>
//     <p> Lets render this to the DOM < /p>
//   </div>
// );
// ReactDOM.render(JSX, document.getElementById('root'));
//

// rendering stateless functional component
// const ChildComponent = () => {
// 	return (
// 		<div>
// 			<p>I am the child</p>
// 		</div>
// 	);
// };
//
// ReactDOM.render(<ChildComponent />, document.getElementById('root'));


//React component
// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

//constructor component:
// class Car extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }

//Components inside component
// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }
// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//       </div>
//     );
//   }
// }


//React props
// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

//If the component has a constructor in it then props should be passed through super()
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a Car, a {this.props.model}!</h2>;
//   }
// }

// ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));


//passing an array using props
// const List = (props) => {
//   return <p>{props.tasks.join(", ")}</p>
// };
//
// class ToDo extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>To Do Lists</h1>
//         <h2>Today</h2>
//         <List tasks={["Code", "Eat", "Code"]} />
//         <h2>Tomorrow</h2>
//         <List tasks={["Code", "Code", "Eat"]}/>
//       </div>
//     );
//   }
// };
// ReactDOM.render(<ToDo />, document.getElementById('root'))


//State object
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model}
//           from {this.state.year}.
//         </p>
//       </div>
//     );
//   }
// }

//change state object
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//
//     // this.changeColor = this.changeColor.bind(this)
//   }
//
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//
//   // changeColor() {
//   //   this.setState({color: "blue"});
//   // }
//
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model} from {this.state.year}.
//         </p>
//         <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<Car />, document.getElementById('root'));



// Change state based on the previous state, in this case do visibility toggle
// class MyComponent extends React.Component {
//
//   constructor(props){
//     super(props)
//     this.state = {
//       visibility: false
//     }
//
//     this.toggleVisibility = this.toggleVisibility.bind(this)
//   }
//
//   toggleVisibility() {
//     this.setState(state => {
//       if(state.visibility===true){
//         return {visibility: false}
//       }
//       else {
//         return {visibility: true}
//       }
//     });
//   }
//
//   render() {
//     if(this.state.visibility) {
//       return (
//         <div>
//           <button onClick = {this.toggleVisibility}>Click Me</button>
//           <h1>Heyy I'm visible</h1>
//         </div>
//       )
//     }
//     else {
//       return (
//         <div>
//           <button onClick = {this.toggleVisibility}>Click Me</button>
//         </div>
//       )
//     }
//   }
//
// }
//
// ReactDOM.render(<MyComponent />, document.getElementById('root'));



// using setState to dynamically display input text:
// class ControlledInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//
//     this.handleChange = this.handleChange.bind(this)
//   }
//
//   handleChange(event) {
//     this.setState({input: event.target.value});
//     console.log(typeof event);
//   }
//
//   render() {
//     return (
//       <div>
//         <input value = {this.state.input} onChange = {this.handleChange}></input>
//         <h4>Controlled Input:</h4>
//         <p>{this.state.input}</p>
//       </div>
//     );
//   }
// };


// simple counter
// class Counter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//
//     this.increment = this.increment.bind(this);
//     this.decrement = this.decrement.bind(this);
//     this.reset = this.reset.bind(this)
//   }
//
//   increment() {
//     this.setState(state => {
//       return {count: state.count + 1}
//     });
//     console.log(this.state.count)
//   }
//
//   decrement() {
//     this.setState(state => {
//       return {count: state.count - 1}
//     });
//     console.log(this.state.count)
//   }
//
//   reset() {
//     this.setState({count: 0})
//   }
//
//   render() {
//     return (
//       <div>
//         <button className='inc' onClick={this.increment}>Increment</button>
//         <button className='dec' onClick={this.decrement}>Decrement</button>
//         <button className='reset' onClick={this.reset}>Reset</button>
//         {this.state.count > -1 && <h1>Current Count: {this.state.count}</h1>}
//         {this.state.count < 0 && <h1>Negative!!!</h1>}
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<Counter />, document.getElementById('root'))



// Passing state as props to child react components:
// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'CamperBot'
//     }
//   }
//   render() {
//     return (
//        <div>
//          <Navbar name = {this.state.name}/>
//        </div>
//     );
//   }
// };
//
// class Navbar extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//     <div>
//       <h1>Hello, my name is: {this.props.name} </h1>
//     </div>
//     );
//   }
// };


// Passing methods / handler functions to child component as props:
// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: ''
//     }
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({
//       inputValue: event.target.value
//     });
//   }
//
//   render() {
//     return (
//        <div>
//         { /* change code below this line */ }
//         <GetInput input={this.state.inputValue} handleChange = {this.handleChange}/>
//         <RenderInput input={this.state.inputValue}/>
//         { /* change code above this line */ }
//        </div>
//     );
//   }
// };
//
// class GetInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Get Input:</h3>
//         <input value={this.props.input} onChange={this.props.handleChange}/>
//       </div>
//     );
//   }
// };
//
// class RenderInput extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>Input Render:</h3>
//         <p>{this.props.input}</p>
//       </div>
//     );
//   }
// };
//
// ReactDOM.render(<MyApp />, document.getElementById('root'));


//getDerivedStateFromProps
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }
//
// ReactDOM.render(<Header favcol="blue"/>, document.getElementById('root'));


// componentWillMount
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentWillMount() {
//     // change code below this line
//     console.log("What is happening?")
//     // change code above this line
//   }
//   render() {
//     return (
//       <div>
//         <h1>Why should I use this??</h1>
//         <h1>My name {this.props.name}</h1>
//       </div>
//     )
//   }
// };
// ReactDOM.render(<MyComponent name="Lily"/>, document.getElementById('root'));


// componentDidMount and componentWillUnmount
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       message: ''
//     };
//     this.handleEnter = this.handleEnter.bind(this);
//     this.handleKeyPress = this.handleKeyPress.bind(this);
//   }
//
//   componentDidMount() {
//     document.addEventListener("keydown", this.handleKeyPress)
//   }
//
//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handleKeyPress)
//   }
//
//   handleEnter() {
//     this.setState({
//       message: this.state.message + 'You pressed the enter key! '
//     });
//   }
//
//   handleKeyPress(event) {
//     if (event.keyCode === 13) {
//       this.handleEnter();
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//       </div>
//     );
//   }
// };



//componentDidMount
// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }
//
// ReactDOM.render(<Header />, document.getElementById('root'));



//shouldComponentUpdate and componentDidUpdate
// class OnlyEvens extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('Should I update?');
//     if(nextProps.value%2===0){
//       return true;
//      }
//     else {
//       return false;
//      }
//   }
//   componentDidUpdate() {
//     console.log('Component re-rendered.');
//     console.log(this.props.value);
//   }
//   render() {
//     return <h1>{this.props.value}</h1>
//   }
// };
// class Controller extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 1
//     };
//     this.addValue = this.addValue.bind(this);
//   }
//   addValue() {
//     this.setState({
//       value: this.state.value + 1
//     });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.addValue}>Add</button>
//         <OnlyEvens value={this.state.value}/>
//       </div>
//     );
//   }
// };


// Advanced JS in react render method
// const inputStyle = {
//   width: 235,
//   margin: 5
// }
//
// class MagicEightBall extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: '',
//       randomIndex: ''
//     }
//     this.ask = this.ask.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   ask() {
//     if (this.state.userInput) {
//       this.setState({
//         randomIndex: Math.floor(Math.random() * 20),
//         userInput: ''
//       });
//     }
//   }
//
//   handleChange(event) {
//     this.setState({
//       userInput: event.target.value
//     });
//   }
//
//   render() {
//     const possibleAnswers = [
//       'It is certain',
//       'It is decidedly so',
//       'Without a doubt',
//       'Yes, definitely',
//       'You may rely on it',
//       'As I see it, yes',
//       'Outlook good',
//       'Yes',
//       'Signs point to yes',
//       'Reply hazy try again',
//       'Ask again later',
//       'Better not tell you now',
//       'Cannot predict now',
//       'Concentrate and ask again',
//       'Dont count on it',
//       'My reply is no',
//       'My sources say no',
//       'Most likely',
//       'Outlook not so good',
//       'Very doubtful'
//     ];
//     const answer = possibleAnswers[this.state.randomIndex] // << change code here
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.userInput}
//           onChange={this.handleChange}
//           style={inputStyle} /><br />
//         <button onClick={this.ask}>Ask the Magic Eight Ball!
//         </button>
//         <br />
//         <h3>Answer:</h3>
//         <p>
//           { /* change code below this line */ }
//           {answer}
//           { /* change code above this line */ }
//         </p>
//       </div>
//     );
//   }
// };
//
// ReactDOM.render(<MagicEightBall />, document.getElementById('root'));


//Events
// class Football extends React.Component {
//   shoot(a, b) {
//     alert(a);
//     alert(b.type) //b refers to the React event that triggered the function, in this case the 'click' event
//   }
//   render() {
//     return (
//       <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     );
//   }
// }
// ReactDOM.render(<Football />, document.getElementById('root'));


// Forms
// class MyForm extends React.Component {
//   hello(){
//     var nam = document.getElementById("name").value;
//     alert("Hello "+nam);
//   }
//
//   render() {
//     return (
//       <form>
//         <h1>Hello</h1>
//         <p>Enter your name:</p>
//         <input type="text" id="name"/>
//         <button onClick={this.hello}>Submit</button>
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));


//Handle changes
// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(<MyForm />, document.getElementById('root'));


//conditional rendering using if-else
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       display: true
//     }
//     this.toggleDisplay = this.toggleDisplay.bind(this);
//   }
//
//   toggleDisplay() {
//     this.setState({
//       display: !this.state.display
//     });
//   }
//
//   render() {
//     if(this.state.display === true){
//       return (
//        <div>
//          <button onClick={this.toggleDisplay}>Toggle Display</button>
//          <h1>Displayed!</h1>
//        </div>
//       );
//     }
//     else {
//       return (
//        <div>
//          <button onClick={this.toggleDisplay}>Toggle Display</button>
//        </div>
//       );
//     }
//   }
// };
//
// ReactDOM.render(<MyComponent />, document.getElementById('root'));



// Conditional rendering using props:
// class Results extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <h1>
//       {
//         this.props.fiftyFifty ?
//         "You Win!" :
//         "You Lose!"
//       }
//       </h1>
//     )
//   };
// };
//
// class GameOfChance extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 1
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }
//
//   render() {
//     const expression = Math.random() >= .5
//     return (
//       <div>
//         <button onClick={this.handleClick}>Play Again</button>
//         { /* change code below this line */ }
//         <Results fiftyFifty={expression}/>
//         { /* change code above this line */ }
//         <p>{'Turn: ' + this.state.counter}</p>
//       </div>
//     );
//   }
// };


//submitting and validating Forms
// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//     };
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (nam === "age") {
//       if (!Number(val)) {
//         alert("Your age must be a number");
//       }
//     }
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(<MyForm />, document.getElementById('root'));


//drop down menu
// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mycar: 'Volvo',
//       choice: ''
//     };
//   }
//   myChangeHandler = (event) => {
//     this.setState({choice: event.target.value});
//   }
//   render() {
//     return (
//       <form>
//       <h1>You selected {this.state.choice}</h1>
//       <select value={this.state.mycar} onChange={this.myChangeHandler}>
//         <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//       </form>
//     );
//   }
// }
//
// ReactDOM.render(<MyForm />, document.getElementById('root'));


//CSS
// class MyHeader extends React.Component {
//   render() {
//     const mystyle = {
//       color: "white",
//       backgroundColor: "DodgerBlue",
//       padding: "10px",
//       fontFamily: "Arial"
//     };
//     return (
//       <div>
//       <h1 style={mystyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<MyHeader />, document.getElementById('root'));


// changing inline css based on component state
// class GateKeeper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       input: ''
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ input: event.target.value })
//   }
//   render() {
//     let inputStyle = {
//       border: '1px solid black'
//     };
//
//     let noStyle = {
//       border: '3px solid red'
//     }
//
//     return (
//       <div>
//         <h3>Don't Type Too Much:</h3>
//         <input
//           type="text"
//           style={
//             this.state.input.length > 15 ?
//             noStyle :
//             inputStyle}
//           value={this.state.input}
//           onChange={this.handleChange} />
//       </div>
//     );
//   }
// };


// Dynamically render elements using Array.map()
// const textAreaStyles = {
//   width: 235,
//   margin: 5
// };
//
// class MyToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userInput: '',
//       toDoList: []
//     }
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//
//   handleSubmit() {
//     const itemsArray = this.state.userInput.split(',');
//     this.setState({
//       toDoList: itemsArray
//     });
//   }
//
//   handleChange(e) {
//     this.setState({
//       userInput: e.target.value
//     });
//   }
//
//   render() {
//     const items = this.state.toDoList.map(i => <li>{i}</li>);
//     return (
//       <div>
//         <textarea
//           onChange={this.handleChange}
//           value={this.state.userInput}
//           style={textAreaStyles}
//           placeholder="Separate Items With Commas" />
//         <br />
//         <button onClick={this.handleSubmit}>Create List</button>
//         <h1>My "To Do" List:</h1>
//         <ul>
//           {items}
//         </ul>
//       </div>
//     );
//   }
// };


// Array.filter()
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         {
//           username: 'Jeff',
//           online: true
//         },
//         {
//           username: 'Alan',
//           online: false
//         },
//         {
//           username: 'Mary',
//           online: true
//         },
//         {
//           username: 'Jim',
//           online: false
//         },
//         {
//           username: 'Sara',
//           online: true
//         },
//         {
//           username: 'Laura',
//           online: true
//         }
//       ]
//     }
//   }
//   render() {
//     const usersOnline = this.state.users.filter(user => user.online==true);
//     const renderOnline = usersOnline.map(
//       i => <li key={i.username}>{i.username}</li>
//       );
//     return (
//        <div>
//          <h1>Current Online Users:</h1>
//          <ul>
//            {renderOnline}
//          </ul>
//        </div>
//     );
//   }
// };


//  Passing state as a props to child component, the parent/child should re-render after a change in state by child component
// class Sibling extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       count: this.props.count
//     }
//
//     this.hincrement = this.hincrement.bind(this);
//   }
//
//   hincrement(){
//     this.setState(state => {
//       const count = state.count + 100
//
//       return {
//         count
//       };
//     });
//   }
//
//   render() {
//     return (
//       <button onClick={this.hincrement}>{this.state.count}</button>
//     );
//   }
// }


// Parent passing a state as a prop to Child, Child then modifies this state and passes it back to Parent so that Parent re-renders when there is a change in state
// class Child extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       count: this.props.count
//     }
//
//     this.increment = this.increment.bind(this);
//   }
//
//   increment(){
//     this.setState(state => {
//       const count = state.count + 1
//
//       return {
//         count
//       };
//     });
//   }
//
//
//   render() {
//     var handleUpdate = this.props.handleUpdate
//     return (
//       <div>
//         <button style={{fontSize: "30px"}} onClick={this.increment}>{this.state.count}</button>
//         <button style={{fontSize: "30px"}} onClick={() => handleUpdate(this.state.count)}>To update parent state</button>
//       </div>
//     );
//   }
// }
//
//
// class Parent extends React.Component {
//   constructor(props){
//     super(props);
//
//     this.state = {
//       count: 0
//     }
//
//     this.handleUpdate = this.handleUpdate.bind(this)
//   }
//
//   handleUpdate(updatedCount){
//     console.log('We pass argument from Child to Parent: ' + updatedCount);
//     this.setState({
//       count: updatedCount
//     });
//   }
//
//   render() {
//     console.log(this.state.count)
//     return (
//       <div>
//         <h1>Counter</h1>
//         <Child count={this.state.count} handleUpdate={this.handleUpdate}/>
//         <h1>{this.state.count}</h1>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<Parent />, document.getElementById('root'))


// Toggle in React
import Switch from "react-switch";

class BasicExample extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      unit: 'C'
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleUnits = this.handleUnits.bind(this);
  }

  handleChange(checked) {
    var deg = ''
    if(checked === false) { deg = 'C'}
    else { deg = 'F' }

    this.setState({ checked,
      unit: deg
    });

    console.log(checked)
  }
  //
  // handleUnits() {
  //   var deg = ''
  //   // if(this.state.checked) { deg = 'F'}
  //   // else { deg = 'C'}
  //
  //   this.state.checked ? deg = 'F' : deg = 'C'
  //
  //   this.setState({
  //     unit: deg
  //   });
  //   console.log(this.state.checked)
  // }

  render() {
    return (
      <div className="example">
        <h2>Simple usage</h2>
        <label>
          <span>C</span>
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            className="react-switch"
          />
          <span>F</span>
        </label>
        <p>The switch is <span>{this.state.checked ? 'on' : 'off'}</span>.</p>
        <h1>{this.state.unit}</h1>
      </div>
    );
  }
}

ReactDOM.render(<BasicExample />, document.getElementById('root'))

/* styles.css */
//
// .react-switch {
//   vertical-align: middle;
//   margin-left: 4px;
// }
