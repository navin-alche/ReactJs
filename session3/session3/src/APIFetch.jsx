
import { useEffect, useState } from "react";

function APIFetch() {

  // This will store the users received from the API
  const [users, setUsers] = useState([]);

  // useEffect automaticallyy runs after the component loads
  useEffect(() => {

    // Call the API
    fetch("https://jsonplaceholder.typicode.com/users")

      // Convert the response into JSON
      .then((response) => response.json())

      // Receive the actual data
      .then((data) => {

        console.log(data);

        // Store API data inside state
        setUsers(data);

      })

      // Catch errors
      .catch((error) => {

        console.log("Error:", error);

      });

  }, []);

  return (
    <div>

      <h1>Users From API</h1>

      {/* Loop through users received from API */}

      {users.map((user) => (

        <div key={user.id}>

          <h3>{user.name}</h3>

          <p>{user.email}</p>

        </div>

      ))}

    </div>
  );
}

export default APIFetch;


// React Page
//     ↓
// fetch()
//     ↓
// API Server
//     ↓
// JSON Response
//     ↓
// response.json()
//     ↓
// setUsers(data)
//     ↓
// users state changes
//     ↓
// React updates the screen
//     ↓
// map() displays users