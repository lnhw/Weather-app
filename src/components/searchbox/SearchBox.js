import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './searchbox.css';
const SearchBox = ({ setHeight, onSearchSuccess, onSearchError, setSearchWeatherData }) => {
    const [searchCity, setSearchCity] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [isSearched, setIsSearched] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const [weatherData, setWeatherData] = useState(null);
    const buttonRef = useRef(null);
    const handleSearch = async () => {
        if (searchCity.trim()) {
            try {
                setIsSearched(true);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${encodeURIComponent(searchCity)}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
                const data = await response.json();
                setSearchWeatherData(data);
                onSearchSuccess();
            } catch (error) {
                console.log(`Error occured while fetching data ${error}`);
            }
        }
    };

    const handleSearchCity = (e) => {
        setSearchCity(e.target.value);
    };

    const handleSearchButton = (e) => {
        e.preventDefault();
        setIsSearched(true);
        handleSearch();
        setHeight(500);

    };
    const hanleClickOutSide = useCallback((e) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target)) {
            setIsSearched(false);
            setHeight(60);
        }
    }, [buttonRef, setIsSearched, setHeight]);
    useEffect(() => {
        document.addEventListener('click', hanleClickOutSide);
        return () => {
            document.removeEventListener('click', hanleClickOutSide);
        };
    }, [hanleClickOutSide]);
    return (
        <div className="search-box">
            <form className="form-input">
                <FontAwesomeIcon icon={faLocationDot} />
                <input
                    type='text'
                    value={searchCity}
                    onChange={handleSearchCity}
                    placeholder="Input your location"
                />
                <button
                    ref={buttonRef}
                    type="button"
                    className="search-button"
                    onClick={handleSearchButton}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    );
};

export default SearchBox;