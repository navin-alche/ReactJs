import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test2 from './test2.jsx'
import EventTarget from './EventTarget.jsx'
import PreventDefault from './PreventDefault.jsx'
import APIFetch from './APIFetch.jsx'
import APIFetchAsync from './APIFetchAsync.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

      {/* <App /> */}
    {/* <Test2 /> */}

      {/* <EventTarget/> */}

      {/* <PreventDefault/> */}

      {/* <APIFetch/> */}

      <APIFetchAsync/>
  </StrictMode>,
)
