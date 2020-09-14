import React, { useState } from "react";

function Search({ handleSort, handleSearch }) {

    const handleChange = (e) => {
        handleSearch(e.target.value);
    };

    const sortItems = (e) => handleSort(e.target.value);

    return (
        <div className="search">
            <div className="search__field">
                <input
                    type="text"
                    className="search__input"
                    placeholder="Search for challenge.."
                    onChange={handleChange}
                    onKeyDown={handleChange}
                />
                <button className="search__btn">
                    <i className="fas fa-search search__icon"></i>
                </button>
                <select
                    name="challenges"
                    id="selectFilter"
                    className="search__filter"
                    onChange={sortItems}
                >
                    <option value="all">All</option>
                    <option value="Newbie">Newbie</option>
                    <option value="Junior">Junior</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
        </div>
    );
}

export default Search;
