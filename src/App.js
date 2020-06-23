import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import i18n from './i18n';
import localStorage from 'local-storage';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App () {
  useEffect(() => {
    const currentLanguage = localStorage.getItem('lang');
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    } else {
      const navigatorLanguage = navigator.language;
      if (navigatorLanguage) {
        localStorage.setItem('lang', navigatorLanguage.slice(0, 2));
      } else {
        localStorage.setItem('lang', 'fr');
      }
    }
  }, []);

  return (
    <Router>
      <Suspense fallback={null}>
        <div className='App'>
          <Header />
          <Main />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
