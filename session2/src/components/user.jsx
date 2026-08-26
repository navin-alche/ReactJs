
function User({name, age, gender, address}) {

  return (
   // Bootstrap container
    <div className="container col-md-5">

      {/* Page title */}
      <h2>
        User List
      </h2>

      {/* Bootstrap table */}
      <table>

        {/* Table header */}
        <thead>

          <tr>

            <th>Name</th>

            <th>Age</th>

            <th>Gender</th>

            <th>Address</th>

          </tr>

        </thead>


        {/* Table body */}
        <tbody>

          <tr>

            {/* Display user's name */}
            <td>{name}</td>

            {/* Display user's age */}
            <td>{age}</td>

            {/* Display user's gender */}
            <td>{gender}</td>

            {/* Display user's address */}
            <td>{address}</td>

          </tr>

        </tbody>

      </table>

    </div>
  )
}

export default User
