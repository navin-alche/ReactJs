import { useEffect, useState } from "react";

function APIFetchAsync() {

  const [users, setUsers] = useState([]);

  // Function responsible for getting users
  const getUsers = async () => {

    try {

      // Wait for API response (React, please wait until I receive the response before continuing.)
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // Convert response into JSON
      const data = await response.json();

      // Display in console
      console.log(data);

      // Store inside state
      setUsers(data);

    }
    catch (error) {

      console.log("Something went wrong");

      console.log(error);

    }

  };

  // Run once when the page loads
  useEffect(() => {

    getUsers();

  }, []);

  return (
    <div>

      <h1>Users</h1>

      {users.map((user) => (

        <div key={user.id}>

          <h3>{user.name}</h3>

          <p>Email: {user.email}</p>

          <p>Phone: {user.phone}</p>

        </div>

      ))}

    </div>
  );
}

export default APIFetchAsync;