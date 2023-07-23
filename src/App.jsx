import React, { useState, useEffect } from 'react';

// function NumberSorting() {
//   const [inputText, setInputText] = useState("");
//   const [sortedNumbers, setSortedNumbers] = useState([]);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSort = () => {
//     // Split the inputText by commas to get an array of number strings
//     const numberStrings = inputText.split(',');

//     // Remove any whitespace from each number string
//     const cleanedNumberStrings = numberStrings.map((numberStr) => numberStr.trim());

//     // Convert each cleaned number string to a number
//     const numbers = cleanedNumberStrings.map(Number);

//     // Check if all elements in the numbers array are valid numbers
//     const isValidInput = numbers.every((number) => !isNaN(number));

//     if (isValidInput) {
//       // Sort the numbers in ascending order
//       const sortedArray = [...numbers].sort((a, b) => a - b);

//       // Set the sorted numbers in the state variable sortedNumbers
//       setSortedNumbers(sortedArray);

//       // Clear any previous error message
//       setErrorMessage("");
//     } else {
//       // If the input is empty or contains invalid characters, set an error message
//       setErrorMessage("Invalid input. Please enter a valid list of numbers (comma-separated).");
//       setSortedNumbers([]); // Clear sortedNumbers array if an error occurs
//     }
//   };

//   return (
//     <div>
//       <h1>Number Sorting Challenge</h1>
//       <input 
//         type="text"
//         placeholder='Enter numbers (comma-separated)...'
//         value={inputText}
//         onChange={(e) => setInputText(e.target.value)}
//         className='w-2/6 h-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4'
//       />
//       <button onClick={handleSort} className='w-1/12 h-10 rounded-sm border hover:outline-4 bg-blue-600 text-white'>
//         Sort
//       </button>

//       {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
//       {sortedNumbers.length > 0 && (
//         <div>
//           <p>Sorted Numbers: {sortedNumbers.join(", ")}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NumberSorting;



// function TodoList() {
//   const [todoText, setTodoText] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = (newTodo) => {
//    if(todoText.trim() != ""){
//     const newTodo = {
//       text: todoText,
//       completed: false,
//     }
//     setTodos([...todoText, newTodo])

//     setTodoText('')
//    }
  
//   };

//   const handleToggleComplete = (index) => {
//     // Your logic to toggle the completion status of a to-do item goes here
//     // Create a copy of the todos array
//     // Toggle the completion status of the to-do item at the specified index
//     // Update the todos array with the modified copy

//     // Hint: You can use the map method to update the completion status of a specific item in the todos array
//   };

//   const handleRemoveTodo = (index) => {
//     // Your logic to remove a to-do item goes here
//     // Create a copy of the todos array
//     // Remove the to-do item at the specified index from the copy
//     // Update the todos array with the modified copy

//     // Hint: You can use the filter method to remove a specific item from the todos array
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         placeholder="Enter new to-do..."
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo,index)=>(
//         <li key={index}>
//           <input 
//           type="checkbox" 
//           checked={todo.completed}
//           onChange={handleToggleComplete}
//           >
//             <span 
//             style={{
//                textDecoration:todo.completes? 'line-through': 'none'
//             }}
//             >
//            {todo.text}

//             </span>
//             <button onClick={() => handleRemoveTodo(index)}>Remove</button>

//         </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;


// function TodoList() {
//   const [todoText, setTodoText] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const handleAddTodo = () => {
//     if (todoText.trim() !== "") {
//       const newTodo = {
//         text: todoText,
//         completed: false,
//       };
//       setTodos([...todos, newTodo]);
//       setTodoText("");
//     }
//   };

//   const handleToggleComplete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };

//   const handleRemoveTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   const handleEditTodo = (index, newText) => {
//     if (newText.trim() !== "") {
//       const updatedTodos = [...todos];
//       updatedTodos[index].text = newText;
//       setTodos(updatedTodos);
//       setEditIndex(null);
//     }
//   };

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <input
//         type="text"
//         placeholder="Enter new to-do..."
//         value={todoText}
//         onChange={(e) => setTodoText(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {editIndex === index ? (
//               <input
//                 type="text"
//                 value={todo.text}
//                 onChange={(e) => handleEditTodo(index, e.target.value)}
//               />
//             ) : (
//               <>
//                 <input
//                   type="checkbox"
//                   checked={todo.completed}
//                   onChange={() => handleToggleComplete(index)}
//                 />
//                 <span
//                   style={{
//                     textDecoration: todo.completed ? 'line-through' : 'none'
//                   }}
//                 >
//                   {todo.text}
//                 </span>
//               </>
//             )}
//             <button onClick={() => setEditIndex(index)}>
//               {editIndex === index ? "Save" : "Edit"}
//             </button>
//             <button onClick={() => handleRemoveTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;

// counter app


// function Counter() {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const handleDecrement = () => {
//     setCount((prevCount) => prevCount - 1);
//   };

//   const handleReset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <p>Counter Value: {count}</p>
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

// quote generator single page app


  // const quotes = [
  //   {
  //     text: "There is no friend as loyal as a book.",
  //     author: "Ernest Hemingway"
  //   },
  //   {
  //     text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
  //     author: "Voltaire"
  //   },
  //   {
  //     text: "Life is tough my darling, but so are you..",
  //     author: "Stephanie Bennett Henry"
  //   },
  //   {
  //     text: "Self-awareness and self-love matter. Who we are is how we lead.",
  //     author: "Brene Brown"
  //   },
  //   {
  //     text: "Let me live, love, and say it well in good sentences.",
  //     author: "Sylvia Plath"
  //   },
  //   {
  //     text: "Be kind, for everyone you meet is fighting a hard battle.",
  //     author: " Plato"
  //   },
  //   {
  //     text: "Pain is inevitable. Suffering is optional.",
  //     author: "Haruki Murakami"
  //   },
  //   // Add more quotes here
  // ];

// function QuoteGenerator() {
//   const quotes = [
//     {
//       text: "There is no friend as loyal as a book.",
//       author: "Ernest Hemingway"
//     },
//     {
//       text: "The only way to do great work is to love what you do.",
//       author: "Steve Jobs"
//     },
//     {
//       text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//       author: "Winston Churchill"
//     },
//     // Add more quotes here
//   ];

//   const [randomQuote, setRandomQuote] = useState({ text: "", author: "" });

//   const generateRandomQuote = () => {
//     // Generate a random index to pick a random quote from the quotes array
//     const randomIndex = Math.floor(Math.random() * quotes.length);

//     // Get the random quote from the quotes array based on the random index
//     const selectedQuote = quotes[randomIndex];

//     // Update the randomQuote state with the randomly selected quote
//     setRandomQuote(selectedQuote);
//   };

//   // Generate a random quote when the component mounts
//   useEffect(() => {
//     generateRandomQuote();
//   }, []);

//   return (
//     <div>
//       <h1>Random Quote Generator</h1>
//       <blockquote>
//         `{randomQuote.text}` - {randomQuote.author}
//       </blockquote>
//       <button onClick={generateRandomQuote}>Generate Quote</button>
//     </div>
//   );
// }

// export default QuoteGenerator;

// function QuoteGenerator() {
//   const quotes = [
//     {
//       text: "There is no friend as loyal as a book.",
//       author: "Ernest Hemingway"
//     },
//     {
//       text: "The only way to do great work is to love what you do.",
//       author: "Steve Jobs"
//     },
//     {
//       text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
//       author: "Winston Churchill"
//     },
//     // Add more quotes here
//   ];

//   const [randomQuote, setRandomQuote] = useState(getRandomQuote());

//   function getRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
//   }

//   const generateRandomQuote = () => {
//     const newRandomQuote = getRandomQuote();
//     setRandomQuote(newRandomQuote);
//   };

//   return (
//     <div>
//       <h1>Random Quote Generator</h1>
//       <blockquote>
//         "{randomQuote.text}" - {randomQuote.author}
//       </blockquote>
//       <button onClick={generateRandomQuote}>Generate Quote</button>
//     </div>
//   );
// }

// export default QuoteGenerator;



// function QuoteGenerator() {
//   const quotes = [
//     {
//       text: "There is no friend as loyal as a book.",
//       author: "Ernest Hemingway"
//     },
//     {
//       text: "Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.",
//       author: "Voltaire"
//     },
//     {
//       text: "Life is tough my darling, but so are you..",
//       author: "Stephanie Bennett Henry"
//     },
//     {
//       text: "Self-awareness and self-love matter. Who we are is how we lead.",
//       author: "Brene Brown"
//     },
//     {
//       text: "Let me live, love, and say it well in good sentences.",
//       author: "Sylvia Plath"
//     },
//     {
//       text: "Be kind, for everyone you meet is fighting a hard battle.",
//       author: " Plato"
//     },
//     {
//       text: "Pain is inevitable. Suffering is optional.",
//       author: "Haruki Murakami"
//     },
//     // Add more quotes here
//   ];
//   const [randomQuote, setRandomQuote] = useState({ text: "", author: "" });

//   const getRandomQuote = () => {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     return quotes[randomIndex];
//   };

//   const generateRandomQuote = () => {
//     const newRandomQuote = getRandomQuote();
//     setRandomQuote(newRandomQuote);
//   };

//   useEffect(() => {
//     // Generate a random quote when the component mounts
//     generateRandomQuote();
//   }, []);

//   return (
//     <div>
//       <h1>Random Quote Generator</h1>
//       <blockquote>
//         "{randomQuote.text}" - {randomQuote.author}
//       </blockquote>
//       <button onClick={generateRandomQuote}>Generate Quote</button>
//     </div>
//   );
// }

// export default QuoteGenerator;

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({value, onClick}) {
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={onClick}
    >
    {value}
    </div>
  );
}

function Board() {
const[xIsNext, setXISNext] = useState(true);
const[squares, setSquares] = useState(Array(9).fill(null));
const winner = calculateWinner(squares);

const handleClick = (index) => {
if(winner || squares[index]){
return;
}

const newSquares = [...squares];
newSquares[index] = xIsNext? 'X':'O';
setSquares(newSquares);
setXISNext(!xIsNext);

}

let status = winner? `winner ${winner}`: 'Next player: ${xIsNext ? 'X' : 'O'}'

const renderSquare = (index) =>{
return (
   <Square
   value={squares[index]}
   onClick={()=>handleClick(index)}
   />
 );
}

const resetGame = () => {
     setXISNext(true);
    setSquares(Array(9).fill(null));
    
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>{status}</div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner:<span>{winner?'winner':'none'}</span> <span>None</span></div>
      <button style={buttonStyle} onClick={resetGame}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
         {renderSquare(0)}
         {renderSquare(1)}
         {renderSquare(2)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row" style={rowStyle}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  );
}

function calculateWinner (squares) {
   const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6].
   ];
   for(const[a,b,c] of lines){
      if(squares[a] && squares[a] === squares[b] && squares[a] === sqaures[c]){
      return squares[a];
      }
   }
   return null;
}

export function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}


