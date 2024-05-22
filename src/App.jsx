import { useState } from 'react'
import StarterPage from './components/StarterPage'
import WebUserHome from './components/WebUserHome';
import { document } from 'postcss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<StarterPage/>}/>
        <Route exact path="/guest_login" element={<StarterPage/>}/>
        <Route exact path="/guest_user_home"  element={<WebUserHome/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
