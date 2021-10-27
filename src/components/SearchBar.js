import React, { useState } from 'react';

const SearchBar = props => {
    const onSubmit = event => {
        event.preventDefault();
        props.onSubmit(term);
    }

    const [term, setTerm] = useState('');
    return (
        <div className="ui segment">
            <form className="search-bar ui form" onSubmit={onSubmit} >
                <div className="filed">
                    <label>Video Search</label>
                    <input type="text"
                        value={term}
                        onChange={event => setTerm(event.target.value)} />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;