import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // Router section : permet de naviguer entre les différentes pages
    <Router>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </Router >
  );
}

export default App;
