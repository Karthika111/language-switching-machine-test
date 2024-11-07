// src/App.js

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import 'flag-icons/css/flag-icons.min.css'; // Import flag-icons CSS
import './App.css';

const App = () => {
  const { t } = useTranslation();

  // State to store the currently selected language
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default to English

  // Map each language to the appropriate flag icon class
  const flagIcons = {
    en: 'fi fi-gb', // UK flag for English
    es: 'fi fi-es', // Spain flag for Spanish
    fr: 'fi fi-fr', // France flag for French
    de: 'fi fi-de', // Germany flag for German
  };

  // Function to handle language change and update selected language
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="logo-title">
          <span className={`${flagIcons[selectedLanguage]} app-logo-flag`} aria-label="Selected Language Flag"></span>
          <h1 className="app-title">{t('welcome')}</h1>
        </div>
        <LanguageSwitcher onLanguageChange={handleLanguageChange} />
      </header>

      <main className="app-main">
        <p className="app-intro">{t('intro')}</p>
        <button className="app-button">{t('button')}</button>
      </main>

      <footer className="app-footer">
        <a href="#contact" className="app-contact">{t('contact')}</a>
        <p>&copy; 2024 Multi-Language App</p>
      </footer>
    </div>
  );
};

export default App;