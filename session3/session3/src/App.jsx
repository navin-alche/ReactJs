import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// App.jsx

function App() {

  // This is an array of students
  const students = [
    { id: 1, name: "Hanif", age: 20 },
    { id: 2, name: "Farhaan", age: 22 },
    { id: 3, name: "Brian", age: 21 },
    { id: 4, name: "Sadia", age: 23 },
    { id: 5, name: "Brian", age: 23 }
  ];

  return (
    <div className="container mt-4">

      <h1>Student List</h1>

      {/* 
        map() goes through every item inside the array.

        student represents ONE student at a time.

        React will generate one <div> for every student.
      */}

      { students.map((robot) => (

        // key must normally be unique
        <div key={robot.id}>

          <h3>{robot.name}</h3>

          <p>Age: {robot.age}</p>
        </div>

      ))}

    </div>
  );
}

export default App;



// students array
//       ↓
//     map()
//       ↓
// Student 1 → JSX
// Student 2 → JSX
// Student 3 → JSX


//For every student in my array, create some JSX. 
// ==>
// students.map((student) => (
//     <p>{student.name}</p>
// ))