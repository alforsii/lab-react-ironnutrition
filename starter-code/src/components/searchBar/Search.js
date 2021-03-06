import React from 'react'

const Search = ({searchItems, clearBlur}) => {

    return (
        <div>
            <nav className="panel">
                <div className="panel-block">
                    <p className="control has-icons-left">
                    <input onClick={clearBlur} onChange={searchItems} id='search-items' className="input" type="text" placeholder="Search" />
                    <span className="icon is-left">
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </span>
                    </p>
                </div>
            </nav>
        </div>
    )
}

export default Search
