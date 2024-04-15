// src/components/LanguageToggle.tsx
import React, { useState } from 'react';

const LanguageToggle: React.FC = () => {
    const [language, setLanguage] = useState('en');

    const content: { [key: string]: string } = {
        en: "Privacy policy content in English...",
        de: "Datenschutzerklärung auf Deutsch..."
    };

    return (
        <div>
            <div className="language-toggle">
                <button onClick={() => setLanguage('en')}>English</button>
                <a>|</a>
                <button onClick={() => setLanguage('de')}>German</button>
            </div>
            <p>{content[language]}</p>
        </div>
    );
};

export default LanguageToggle;
