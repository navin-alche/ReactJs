// Import useState from React
import { useState } from "react";

function Counter() {

  // Create a state variable called "count"
  // count = current value
  // setCount = function used to change the value
  // 0 = starting value

  //look into hooks + DOM - states
  const [count, setCount] = useState(0);

  return (

 <div >

          <h2>useState Example</h2>

          {/* Display the current value */}
          <h1>
            {count}
          </h1>

          {/* Increase count */}
          <button onClick={() => setCount(count + 1)}>
            + Increase
          </button>

          {/* Decrease count */}
          <button onClick={() => setCount(count - 1)}>
            - Decrease
          </button>

          {/* Reset count */}
          <button onClick={() => setCount(0)} >
            Reset
          </button>

        </div>

  );
}

export default Counter;