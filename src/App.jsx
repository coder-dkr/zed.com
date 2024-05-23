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
  
  return (
    <>
    
    <Router>
      <Routes>
        <Route exact path="/" element={<StarterPage hide="hidden" bgrang="bg-black" />}/>
        <Route exact path="/guest_login" element={<StarterPage hide="nothidden" bgrang="bg-[#242d34]" />}/>
        <Route exact path="/guest_user_home"  element={<WebUserHome/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
