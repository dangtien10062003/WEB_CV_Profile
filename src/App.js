import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import AmbientScene from './components/AmbientScene';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Experience from './pages/Experience';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="portfolio-app min-h-screen text-white transition-colors duration-300">
          <AmbientScene />
          <ScrollProgress />
          <Navbar />
          <main>
            <Home />
            <Experience />
            <Skills />
            <Achievements />
            <Contact />
            <CV />
          </main>
          <Footer />
          <ScrollIndicator />
          <BackToTop />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
