// ...existing code...
const NavigationBar = ({ onLanguageChange }) => {
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        onLanguageChange(selectedLanguage);
    };

    return (
        <nav>
            {/* ...existing code... */}
            <select onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                {/* Add more languages as needed */}
            </select>
        </nav>
    );
};

export default NavigationBar;
