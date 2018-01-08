import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            term: ''
        }
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onTermChange(term)
    }

    render() {
        return(
            <div>
                <input type="text" placeholder="Search" onChange={(event) => this.onInputChange(event.target.value)} />
                <br /><br />
            </div>
        )
    }
}

export default SearchBar;
