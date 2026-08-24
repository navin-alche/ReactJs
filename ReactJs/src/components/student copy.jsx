// Create the Student component.

// props contains information sent from App.jsx.
function Student(props) {

  // Return what should appear on the screen.
  return (

    // Create a container.
    <div>

      {/* Display the name received from App.jsx. */}
      <h2>{props.name}</h2>

    </div>

  ); // End of return.

} // End of Student component.

// Export the Student component.
export default Student;