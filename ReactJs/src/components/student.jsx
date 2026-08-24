// Create a component called Student.
function Student() {

  // Return what this component should display.
  return (

    // Create a container for the student.
    <div>

      {/* Display the student's name. */}
      <h2>Alice</h2>

      {/* Display the student's course. */}
      <p>Software Engineering</p>

    </div>

  ); // End of return.

} // End of Student component.

// Export Student so another file can use it.
export default Student;


/*

A COMPONENT is a reusable part of our webpage.


For example:


        WEBSITE
           |
     --------------
     |      |     |
   Header  Main  Footer


Each part can be a component.


*/