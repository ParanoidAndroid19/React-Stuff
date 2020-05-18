import React from 'react';
import ReactDOM from 'react-dom';
// import power from './power.jpg';
import './index.css';


//Simple profile page

// const Profile = ()=> {
//   return (
//     <div>
//       <h1>Lily</h1>
//       <img src={power} alt='Power' style={{height: "auto", width: "20%"}}/>
//     </div>
//   );
// };
//
// const Hobbies = () => {
//   return (
//     <div>
//     <ul>
//       <li>Code</li>
//       <li>Play</li>
//       <li>Sleep</li>
//       <li>Eat</li>
//     </ul>
//     </div>
//   );
// };
//
// class App extends React.Component{
//
//   render() {
//     return(
//       <div>
//         <Profile />
//         <Hobbies />
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'))


// Simple to-do App (using array as state to be passed from parent to children)

// class List extends React.Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       tasks: this.props.tasks,
//     }
//
//     this.clickHandler = this.clickHandler.bind(this)
//   }
//
//   clickHandler(event){
//     // alert("click works!")
//     event.target.value += 1
//
//     if(event.target.value%2!==0){
//       event.target.style.textDecoration = "line-through"
//     }
//
//     if(event.target.value%2===0){
//       event.target.style.textDecoration = "none"
//     }
//
//     // console.log(event.target.value)
//   }
//
//   // componentDidMount(){
//   //   this.setState(state => {
//   //     this.state.tasks = this.props.tasks
//   //   })
//   //   console.log("will receive?")
//   // }
//
//   static componentWillReceiveProps(nextProps) {
//       this.setState(state => {
//         this.state.tasks = this.nextProps.tasks
//         // this.state.count = this.nextProps.count
//       })
//       console.log("will receive?")
//   }
//
//   render(){
//     return(
//       <div>
//         <ul>
//           {this.state.tasks.map(item => {
//             return <li key={item} onClick={this.clickHandler}>{item}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }


//
// class Add extends React.Component{
//   constructor(props){
//     super(props)
//
//     this.state = {
//       userInput: '',
//       tasks: this.props.tasks,
//       // count: this.props.count
//     }
//
//     this.handleChange = this.handleChange.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
//   }
//
//   onSubmit(){
//     this.setState(state => {
//       const tasks = state.tasks.concat(state.userInput);
//       return {
//         tasks,
//         userInput: '',
//         count: this.state.count + 1
//       };
//     });
//     console.log(this.state.count)
//
//     // this.props.liftState({tasks: this.props.tasks.concat(this.state.userInput)});
//   }
//
//
//   handleChange(event){
//     this.setState({
//       userInput: event.target.value
//     })
//   }
//
//   render(){
//     return(
//       <div>
//         <input type='text' onChange={this.handleChange} value={this.state.userInput}/>
//         <button type='button' onClick={this.onSubmit}>Add</button>
//       </div>
//     )
//   }
// }


//
// class Todo extends React.Component{
//   constructor(props){
//     super(props);
//
//     this.state = {
//       tasks: ["Code"],
//       // count: 0
//     }
//   }
//
//   liftState = state => {
//         this.setState(state);
//   }
//
//   render(){
//     return(
//       <div>
//         <h1>List:</h1>
//         <List tasks={this.state.tasks}/>
//         <h2>Add new items</h2>
//         <Add liftState={this.liftState}/>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<Todo />, document.getElementById('root'))


class Todo extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      tasks: ["Code"],
      userInput: ''
    }

    // this.clickHandler = this.clickHandler.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    // this.deleteItem = this.deleteItem.bind(this)
  }

  onSubmit(){
    this.setState(state => {
      const tasks = state.tasks.concat(state.userInput);

      return {
        tasks,
        userInput: '',
      };
    });
  }

  handleChange(event){
    this.setState({
      userInput: event.target.value
    })
  }

  // remove(e) {
  //   this.setState({tasks: this.state.tasks.filter(function(task) {
  //       return task !== e.target.value
  //   })});
  //   // console.log(e.target.value)
  // }

  deleteItem(removeItem) {
    this.setState(({
      tasks: this.state.tasks.filter(item => item !== removeItem)
    }))
    // var index = this.state.tasks.indexOf(removeItem); // Let's say it's Bob.
    // this.state.tasks.splice(index,1);
    // console.log(this.state.tasks)
    // alert(this.state.tasks)
  }

  render(){
    return(
      <div>
        <h1 className="h1list">List</h1>

        {this.state.tasks.map((item) => {
          return <p key={item}>
            <input type="checkbox" className="check"/>
            <label>{item}   </label>
            <button type='button' onClick={() => this.deleteItem(item)}>Delete</button>
          </p>
        })}

        <input type='text' onChange={this.handleChange} value={this.state.userInput}/>
        <button type='button' onClick={this.onSubmit}>Add</button>

      </div>
    )
  }
}

ReactDOM.render(<Todo />, document.getElementById('root'))
