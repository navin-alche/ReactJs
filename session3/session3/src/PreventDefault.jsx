
import { useState } from "react";

function PreventDefault() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // This runs when the form is submitted
  const handleSubmit = (event) => {

    // Stop the browser from refreshing
    event.preventDefault();

    console.log("Form submitted");

    console.log("Name:", name);
    console.log("Email:", email);
  };

  return (
    <div>

      <h1>Registration Form</h1>

      {/* 
        onSubmit runs when the user submits the form
      */}
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name</label>

          <input
            type="text"

            // value comes from state
            value={name}

            // Update state when user types
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <br />

        {/* 
          type="submit" submits the form
        */}
        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default PreventDefault;