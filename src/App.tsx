import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Locations from './pages/Locations';
import Trivia from './pages/Trivia';
import Author from './pages/Author';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/author" element={<Author />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;