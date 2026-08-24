// Import useState from React.
import { useState } from "react";

// Create the App component.
function App() {

  // Create a state variable called count.
  // count = current value.
  // setCount = function used to change count.
  // 0 = starting value.
  const [count, setCount] = useState(0);

  // Return what should appear on the screen.
  return (

    // Main container.
    <div>

      {/* Display a title. */}
      <h1>React Counter</h1>

      {/* Display the current count. */}
      <h2>{count}</h2>

      {/* 
          When this button is clicked,
          increase count by 1.
      */}
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>

  );

}

// Export App so main.jsx can use it.
export default App;