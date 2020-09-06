import React, { Component } from "react";

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchQuery: "",
        };
    }

    onChange = (e) => {
        this.setState({ searchQuery: e.target.value });
        this.props.onSearch(this.state.searchQuery);
    };

    onSort = (e) => {
        this.props.onSort(e.target.value);
    };

    render() {
        return (
            <div className="search">
                <div className="search__field">
                    <input
                        type="text"
                        className="search__input"
                        placeholder="Search for challenge.."
                        onChange={this.onChange}
                        onKeyUp={this.onChange}
                    />
                    <button className="search__btn">
                        <i className="fas fa-search search__icon"></i>
                    </button>
                    <select
                        name="challenges"
                        id="selectFilter"
                        className="search__filter"
                        onChange={this.onSort}
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
}

export default Search;
