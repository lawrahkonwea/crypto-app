import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCrypto } from './redux/crypto/crypto';
import Details from './components/Details';
import Home from './components/Home';
// import Navigation from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchCrypto());
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
