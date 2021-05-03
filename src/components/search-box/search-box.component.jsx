import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({placeholder,handleChance}) => (
    <input
        type="search" 
        className = 'search'
        placeholder = {placeholder}
        onChange = {handleChance}
    />
)