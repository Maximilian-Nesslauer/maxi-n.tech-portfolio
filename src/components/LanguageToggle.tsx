import React, { useState } from 'react';
import "../styles/languageToggle.css";

const LanguageToggle: React.FC = () => {
    const [language, setLanguage] = useState('en');

    const EnglishContent = () => (
        <div>
            <h1>Privacy Policy</h1>
            <p>Last updated: 17.04.2024</p>
            <p>Welcome to my website. Your privacy is critically important to us. This policy details our privacy practices and how we safeguard your information when you visit our site.</p>
            
            <h2>Information We Collect</h2>
            <p>During your visit, we collect various types of information, including:</p>
            <ul>
                <li><strong>Automatically Collected Information:</strong> Data collected via technical means such as cookies, analytics, and server logs, which may include your IP address, browser type, operating system, device information, and navigation details.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for several purposes:</p>
            <ul>
                <li><strong>Site Management:</strong> Enhance, maintain, and monitor the performance and security of our website using tools like Vercel Analytics.</li>
                <li><strong>Improvement:</strong> Understand how our services are used to help us improve our website and offer a more personalized experience.</li>
            </ul>

            <h2>Cookies and Tracking Technology</h2>
            <p>We use cookies and similar tracking technologies to track activity on our site and store certain information. Tracking technologies employed are beacons, tags, and scripts to collect and track information and to improve and analyze our service.</p>

            <h2>Data Retention</h2>
            <p>We retain personal information only for as long as is necessary for the purposes set out in this policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

            <h2>External Hosting</h2>
            <p>This website is hosted by an external service provider (host). Personal data collected on this website are stored on the host's servers. This may include, but is not limited to, IP addresses, contact requests, metadata and communications, contract data, contact details, names, website accesses, and other data generated through a website.</p>
            <p>The use of the host is in the interest of secure, fast, and efficient provision of our online services by a professional provider (Art. 6 para. 1 lit. f GDPR). Our host will only process your data to the extent necessary to fulfill its service obligations and to follow our instructions with respect to these data.</p>
            <p>We utilize the following host for our website:</p>
                <address>
                    Vercel Inc.
                    340 S Lemon Ave #4133
                    Walnut, CA 91789
                    USA
                </address>
            <p>Data may be transferred to the USA depending on the server location. We have entered into a contract for order processing (AVV) with the aforementioned provider, which is a legally required contract that ensures the provider processes the personal data of our website visitors only according to our instructions and in compliance with the GDPR.</p>
            <p>The data transfer to the USA is based on the EU Commission's standard contractual clauses. You can find details here: <a href="https://vercel.com/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer">Vercel Data Processing Addendum</a>.</p>
            <p>You can find the privacy policy of Vercel here: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a>.</p>

            <h2>International Data Transfers</h2>
            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.</p>

            <h2>Your Data Protection Rights Under General Data Protection Regulation (GDPR)</h2>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. Aimed at allowing you to control your personal information, you have the right to:</p>
            <ul>
                <li>Access, update or to delete the information we have on you.</li>
                <li>Rectify incorrect data or to have incomplete data completed.</li>
                <li>Object, restrict, or limit the use of your personal information.</li>
                <li>Request portability of your personal information.</li>
                <li>Withdraw consent at any time where we relied on your consent to process your personal information.</li>
            </ul>
            
            <h2>Contact Us</h2>
            <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at maximiliannesslauer@gmail.com .</p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <p>We advise you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
        </div>
    );

    const GermanContent = () => (
        <div>
            <h1>Datenschutzerklärung</h1>
            <p>Zuletzt aktualisiert: 17.04.2024</p>
            <p>Willkommen auf meiner Webseite. Ihre Privatsphäre ist uns äußerst wichtig. Diese Richtlinie erläutert unsere Datenschutzpraktiken und wie wir Ihre Informationen schützen, wenn Sie unsere Webseite besuchen.</p>
            
            <h2>Welche Informationen wir sammeln</h2>
            <p>Während Ihres Besuchs sammeln wir verschiedene Arten von Informationen, einschließlich:</p>
            <ul>
                <li><strong>Automatisch gesammelte Informationen:</strong> Daten, die durch technische Mittel wie Cookies, Analysen und Serverprotokolle gesammelt werden, die Ihre IP-Adresse, Browsertyp, Betriebssystem, Geräteinformationen und Navigationsdetails umfassen können.</li>
            </ul>

            <h2>Wie wir Ihre Informationen verwenden</h2>
            <p>Wir verwenden die gesammelten Informationen für mehrere Zwecke:</p>
            <ul>
                <li><strong>Seitenverwaltung:</strong> Verbesserung, Wartung und Überwachung der Leistung und Sicherheit unserer Webseite mithilfe von Tools wie Vercel Analytics.</li>
                <li><strong>Verbesserung:</strong> Verständnis darüber, wie unsere Dienste genutzt werden, um unsere Webseite zu verbessern und ein personalisierteres Erlebnis zu bieten.</li>
            </ul>

            <h2>Cookies und Tracking-Technologien</h2>
            <p>Wir verwenden Cookies und ähnliche Tracking-Technologien, um die Aktivität auf unserer Seite zu verfolgen und bestimmte Informationen zu speichern. Eingesetzte Tracking-Technologien sind Beacons, Tags und Skripte, um Informationen zu sammeln und zu verfolgen sowie unseren Dienst zu verbessern und zu analysieren.</p>

            <h2>Datenspeicherung</h2>
            <p>Wir bewahren personenbezogene Daten nur so lange auf, wie es für die in dieser Richtlinie dargelegten Zwecke notwendig ist. Wir werden Ihre Informationen in dem Maße aufbewahren und verwenden, wie es notwendig ist, um unseren rechtlichen Verpflichtungen nachzukommen, Streitigkeiten zu lösen und unsere Richtlinien durchzusetzen.</p>

            <h2>Externe Hosting</h2>
            <p>Diese Webseite wird von einem externen Dienstanbieter (Host) gehostet. Auf dieser Webseite gesammelte personenbezogene Daten werden auf den Servern des Hosts gespeichert. Dies kann, ist aber nicht beschränkt auf, IP-Adressen, Kontaktanfragen, Metadaten und Kommunikation, Vertragsdaten, Kontaktdetails, Namen, Webseitenzugriffe und andere durch eine Webseite generierte Daten umfassen.</p>
            <p>Die Nutzung des Hosts dient dem Interesse einer sicheren, schnellen und effizienten Bereitstellung unserer Online-Dienste durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Host wird Ihre Daten nur in dem Maße verarbeiten, wie es zur Erfüllung seiner Dienstleistungsverpflichtungen und zur Befolgung unserer Anweisungen bezüglich dieser Daten erforderlich ist.</p>
            <p>Die Datenübertragung in die USA basiert auf den Standardvertragsklauseln der EU-Kommission. Details finden Sie hier: <a href="https://vercel.com/legal/data-processing-addendum" target="_blank" rel="noopener noreferrer">Vercel Data Processing Addendum</a>.</p>
            <p>Die Datenschutzerklärung von Vercel finden Sie hier: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel Datenschutzerklärung</a>.</p>

            <h2>Internationale Datenübertragungen</h2>
            <p>Ihre Informationen, einschließlich personenbezogener Daten, können auf — und auf Computern außerhalb Ihres Staates, Ihrer Provinz, Ihres Landes oder anderer staatlicher Gerichtsbarkeiten, in denen die Datenschutzgesetze von denen Ihrer Gerichtsbarkeit abweichen können, übertragen und dort aufrechterhalten werden.</p>

            <h2>Ihre Datenschutzrechte nach der Datenschutz-Grundverordnung (DSGVO)</h2>
            <p>Wenn Sie in der Europäischen Wirtschaftszone (EWR) ansässig sind, haben Sie bestimmte Datenschutzrechte. Diese sind darauf ausgerichtet, Ihnen die Kontrolle über Ihre persönlichen Informationen zu ermöglichen. Sie haben das Recht:</p>
            <ul>
                <li>Zugang zu Ihren Daten zu fordern, diese zu aktualisieren oder zu löschen.</li>
                <li>Fehlerhafte Daten zu berichtigen oder unvollständige Daten vervollständigen zu lassen.</li>
                <li>Der Verarbeitung Ihrer persönlichen Informationen zu widersprechen, diese einzuschränken oder zu begrenzen.</li>
                <li>Die Übertragbarkeit Ihrer persönlichen Informationen zu beantragen.</li>
                <li>Ihre Einwilligung jederzeit zurückzuziehen, wo wir uns auf Ihre Zustimmung zur Verarbeitung Ihrer persönlichen Informationen verlassen haben.</li>
            </ul>
            
            <h2>Kontaktieren Sie uns</h2>
            <p>Für weitere Informationen über unsere Datenschutzpraktiken, wenn Sie Fragen haben oder eine Beschwerde einreichen möchten, kontaktieren Sie uns bitte per E-Mail unter maximiliannesslauer@gmail.com.</p>
            
            <h2>Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen.</p>
            <p>Wir raten Ihnen, diese Datenschutzerklärung regelmäßig auf Änderungen zu überprüfen. Änderungen dieser Datenschutzerklärung werden wirksam, wenn sie auf dieser Seite veröffentlicht werden.</p>
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
