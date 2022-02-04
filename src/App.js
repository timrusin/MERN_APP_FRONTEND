import React from 'react';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/users" element={<List />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/edituser" element={<Edituser/>} />
      </Routes>
    </div>
    <div>
      <h4 className="sucks">SORRY THIS SUCKS, BUT IT ALL WORKS.... KIND OF...</h4>
    </div>
    </>
  );
}

export default App;

