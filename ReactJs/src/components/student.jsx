// Create the Student component.

// props contains information sent from App.jsx.
function Student(props) {

  // Return what should appear on the screen.
  return (

    // Create a container.
    <div>
      <h3>I am from student.jsx</h3>
      {/* Display the name received from App.jsx. */}
      <h2>{props.name}</h2> <br/>
      <h2>{props.gender}</h2> <br/>
      <h2>{props.email}</h2> <br/>

    </div>

  ); // End of return.

} // End of Student component.

// Export the Student component.
export default Student;