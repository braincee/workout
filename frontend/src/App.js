import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Main from './pages/Main';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  const { user } = useAuthContext()

  return (
    <div>
     <Router>
      <Navbar />
      <div className='pages'>
      <Routes>
        <Route exact path="/" element={user ? <Main /> : <Navigate to="/login"/>} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
      </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
