import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';


function App() {
  return (
    <Router>
      <header className="bg-purple-600 text-white p-4">
        <nav className="flex justify-between">
          <h1 className="text-2xl">Portfolio</h1>
          <div className="space-x-4">
            <Link to="/">Accueil</Link>
            <Link to="/projects">Projets</Link>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
