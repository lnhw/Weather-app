import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './searchbox.css';
const SearchBox = ({ setHeight }) => {
    const [searchCity, setSearchCity] = useState('');
    const [searched, setSearched] = useState(false);
    const buttonRef = useRef(null);
    const handleSearch = async () => {
        if (searchCity.trim()) {
            try {
                setSearched(true);
                const response = await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${searchCity}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
                const data = await response.json();
                console.log(data);
                // return data;
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
        setSearched(true);
        handleSearch();
        setHeight(500);

    };
    const hanleClickOutSide = useCallback((e) => {
        if (buttonRef.current && !buttonRef.current.contains(e.target)) {
            setSearched(false);
            setHeight([]);
            if (!searched) {
                setSearched(false);
                setHeight(0);
            }
        }
    }, [buttonRef, setSearched, setHeight]);
    useEffect(() => {
        document.addEventListener("click", hanleClickOutSide);
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