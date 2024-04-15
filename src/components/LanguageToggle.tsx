// src/components/LanguageToggle.tsx
import React, { useState } from 'react';

const LanguageToggle: React.FC = () => {
    const [language, setLanguage] = useState('en');

    const EnglishContent = () => (
        <div>
            <p>Privacy policy content in English...</p>
        </div>
    );

    const GermanContent = () => (
        <div>
            <p>Datenschutzerklärung auf Deutsch...</p>
        </div>
    );

    return (
        <div>
            <div className="language-toggle flex justify-between">
                <div className="flex-1"></div> {/* spacer div */}
                <h1 className="text-center text-3xl font-bold mb-4 flex-1">Privacy Policy</h1>
                <div className="ml-auto flex-1 justify-end">
                    <button onClick={() => setLanguage('en')}>English</button>
                    <button onClick={() => setLanguage('de')}>German</button>
                </div>
            </div>
            {/* Conditionally render the appropriate content based on the current language */}
            {language === 'en' ? <EnglishContent /> : <GermanContent />}
        </div>
    );
};

export default LanguageToggle;
