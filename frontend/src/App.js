import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Router>
      <Navbar />
      <div className='pages'>
      <Routes>
        <Route exact path="/" element={<Main />}/>
      </Routes>
      </div>
     </Router>
    </div>
  );
}

export default App;
