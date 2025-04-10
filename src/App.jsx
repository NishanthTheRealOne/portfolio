import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/jetbrains-mono/400.css';

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
