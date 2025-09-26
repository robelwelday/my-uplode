import { useState } from 'react';

function LanguageSwitcher({ onLanguageChange }) {
  const [language, setLanguage] = useState('en');

  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    onLanguageChange(selectedLanguage);
  };

  return (
    <select value={language} onChange={handleChange} style={{ padding: '0.5rem', margin: '1rem' }}>
      <option value="en">English</option>
      <option value="am">Amharic</option>
      <option value="or">Oromo</option>
    </select>
  );
}

export default LanguageSwitcher;
