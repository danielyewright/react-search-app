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
        <input type="text" placeholder="Search by name or email..." onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}

export default SearchBar;
