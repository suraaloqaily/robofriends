import React from 'react';
const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa3'>
            <input className='b--light-yellow  pa3'
                type='search'
                placeholder='search robots'
                onChange={searchChange} />
        </div>
    );
}
export default SearchBox