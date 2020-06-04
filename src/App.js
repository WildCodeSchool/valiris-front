import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './i18n';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <div className='App'>
          <Header />
          <Main />
          <LanguageSelector />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
