import { useState } from 'react';

import './AutoComplete.scss';

const AutoComplete = ({ placeholder, suggestions, input, setInput }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Change Method for autocomplete
    const onInputChange = (e) => {
        const userInput = e.target.value;
        if (userInput === '') {
            setShowSuggestions(false);
            setInput(userInput);
            setFilteredSuggestions([]);
            setActiveSuggestionIndex(0);
        } else {
            // Filter out suggestions that dont match input
            const suggested = suggestions.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(userInput.toLowerCase()) >
                    -1
            );
            setInput(e.target.value);
            setFilteredSuggestions(suggested);
            setActiveSuggestionIndex(0);
            setShowSuggestions(true);
        }
    };

    const onSuggestionClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
    };

    return (
        <div className="autoComplete">
            <input
                type="text"
                onChange={(e) => onInputChange(e)}
                value={input}
                className="autoComplete__input"
                placeholder={placeholder}
            />
            {showSuggestions && (
                <ul className="autoComplete__list">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        if (index === activeSuggestionIndex) {
                            className =
                                'autoComplete__list__item suggestion-active';
                        }
                        return (
                            <li
                                className="autoComplete__list__item"
                                key={suggestion}
                                onClick={onSuggestionClick}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default AutoComplete;
