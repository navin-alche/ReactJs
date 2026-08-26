// import { useState } from 'react'
import './App.css'

import User from './components/user'
import Counter from './components/counter'


//e.g 3
// Import routing components
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (

    // e.g 1
    // <User name="navin" age={72} gender="male" address="Grand baie"/>

    // e.g 2
    //  <Counter/>

    // e.g 3
    // BrowserRouter enables routing
    <BrowserRouter>

      {/* Bootstrap navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          <Link to="/TKS"> UserPage </Link>


          <div className="navbar-nav">

            {/* Go to Home */}
            <Link
              className="nav-link"
              to="/Counter"
            >
              CounterPage
            </Link>
          </div>
        </div>
      </nav>

      {/* Define our routes */}
      <Routes>
        {/* URL: /Navin */}
        <Route path="/TKS" element={<User />} />

        {/* URL: /about */}
        <Route path="/Counter" element={<Counter />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
