

// SHOW DIFFERENT JSX DEPENDING ON DATA


function Test2() {

  const students = [
    { id: 1, name: "Tooshar", mark: 75 },
    { id: 2, name: "Navin", mark: 42 },
    { id: 3, name: "Princess", mark: 68 }
  ];

  return (
    <div>

      <h1>Results</h1>

      {students.map((student) => (

        <div key={student.id}>

          <h3>{student.name}</h3>

          <p>Mark: {student.mark}</p>

          
            {/* This is called a ternary operator.

            condition ? valueIfTrue : valueIfFalse */}
         

          {student.mark >= 50 ? (<p>Passed ✅</p>) : (<p>Failed ❌</p> )}

        </div>

      ))}

    </div>
  );
}

export default Test2;


// condition ? JSX : JSX