import React, { useRef } from 'react';

function Search(props) {
    const inputSearch = useRef();
    return (
        <form>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" ref={inputSearch} onChange={()=>props.filterEmployees(inputSearch.current.value)}></input>
        </form>
    )
}

export default Search;