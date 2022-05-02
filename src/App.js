import "./App.css";
// import ListItem from "./components/Listitem";
// import { useState } from "react";
// import Fetcher from "./components/Fetcher";
// import SimpleForm from "./components/Simpleform";
import ReactCardFlip from 'react-card-flip';
import React from "react"

// function App() {
  
//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       task: "Clean stuff",
//       completed: true,
//     },
//     {
//       id: 2,
//       task: "Finish portfolio",
//       completed: false,
//     }
//   ]);

//   const [showCompleted, setShowCompleted] = useState(true);

//   function deleteItem(id) {
//     setTasks((oldState) => oldState.filter((item) => item.id !== id));
//   }

//   function toggleCompletion(id) {
//     setTasks((oldState) => {
//       return oldState.map((item) => {
//         if (id === item.id) {
//           const newItem = { ...item };
//           newItem.completed = !newItem.completed;
//           return newItem;
//         }
//         return item;
//       });
//     });
//   }

//   let all = tasks;
//   if (!showCompleted) {
//     all = tasks.filter((item) => item.completed === false);
//   }

//   function submit(e) {
//     e.preventDefault();
//     const newTask = {
//       id: Math.random(),
//       task: e.target.elements.name.value,
//       completed: false,
//     };
//     setTasks((oldState) => oldState.concat(newTask));
//   }

//   function FrontComponent () {
//     return(
//       <div>
//         <h1>This is the front</h1>
//       </div>
//     )
//   }
  
//   function BackComponent () {
//     return(
//       <div>
//         <h1>This is the back</h1>
//       </div>
//     )
//   }

//   function constructor() {
//     super();
//       this.setState = {
//       isFlipped: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   function handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }

//   return (
//     <div className="App">
//       <SimpleForm />
//       <Fetcher />
//       <button
//         onClick={() => {
//           setShowCompleted((oldState) => !oldState);
//         }}
//       >
//         Test
//       </button>
//       <form onSubmit={submit}>
//         <label htmlFor="name">Task</label>
//         <input required type="text" id="name" name="task" />
//         <button>Add Task</button>
//       </form>
//       <ul>
//         {all.map((task) => (
//           <ListItem
//             toggleCompletion={toggleCompletion}
//             deleteItem={deleteItem}
//             {...task}
//           />
//         ))}
//       </ul>
//       <ReactCardFlip isFlipped={this.setState.isFlipped} flipDirection="vertical">
//         <FrontComponent>
//           This is the front of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </FrontComponent>

//         <BackComponent>
//           This is the back of the card.
//           <button onClick={this.handleClick}>Click to flip</button>
//         </BackComponent>
//       </ReactCardFlip>
//     </div>
//   );
// }

class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <FrontComponent>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </FrontComponent>

        <BackComponent>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </BackComponent>
      </ReactCardFlip>
    )
  }
}

  function FrontComponent (props) {
    return(
      <div>
        <h1>This is the front</h1>
        {props.children}
      </div>
    )
  }
  
  function BackComponent (props) {
    return(
      <div>
        <h1>This is the back</h1>
        {props.children}
      </div>
    )
  }

export default App;