import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DocumentDashboard from './components/DocumentDashboard';
import DocumentViewer from './components/DocumentViewer';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents" element={<DocumentDashboard />} />
          <Route path="/document/:id" element={<DocumentViewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 