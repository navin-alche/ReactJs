// Import the Student component from Student.jsx.
import Student from "./components/student.jsx";

// Create the main App component.
function App() {

  // Return what should appear on the screen.
  return (

    // Main container.
    <div>

      {/* Display the main heading. */}
      <h1>My Students from app.jsx</h1>

      {/* Display our Student component. */}
      <Student email="test@gmail.com" gender="male" name="hello" />
      

    </div>

  ); // End of return.

} // End of App component.

// Export App so React can use it.
export default App;