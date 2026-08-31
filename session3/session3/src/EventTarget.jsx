import { useState } from "react";

function EventTarget() {

  // State that stores whatever the user types
  const [name, setName] = useState("");

  // This function runs whenever the user types
  const handleChange = (event) => {

    // event = information about what happened
    // target = the HTML element that triggered the event
    // value = what is currently inside the input

    console.log(event.target.value);

    // Save the input value inside state
    setName(event.target.value);
  };

  return (
    <div>

      <h1>Enter Your Name</h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
      />

      <p>You entered: {name}</p>

    </div>
  );
}

export default EventTarget;


// event.target.value => Give me the current value of the input that triggered the event



// User types "Navin"
//         ↓
// onChange happens
//         ↓
// event is created
//         ↓
// event.target = input
//         ↓
// event.target.value = "Navin"