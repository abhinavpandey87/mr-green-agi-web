// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AGIStatusPage from './pages/AGIStatusPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-green-600">MR GREEN - Web AGI</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:text-green-500">Home</Link>
            <Link to="/agi" className="hover:text-green-500">AGI Status</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agi" element={<AGIStatusPage />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
