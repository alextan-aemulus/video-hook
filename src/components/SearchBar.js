import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    // arrow type solution for referring to this. for callback function
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label className="">Video Search</label>
                    <input type="text" 
                        value={term} 
                        onChange={(e) => setTerm(e.target.value)} />
                </div>
            </form>
        </div>
    );

};

export default SearchBar;
