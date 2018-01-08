import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableList from './table-list';
import SearchBar from './search';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      items: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json()
      })
      .then(data => {
        let users = data.map((client, index) => {
          return client;
        })
        this.setState({
          users: users,
          items: users
        })
      })
  }

  handleChange(event) {
    let filters = this.state.users;
    filters = filters.filter((e) => {
      if (e.name.toLowerCase().includes(event.toLowerCase())) {
        return e.name.toLowerCase().search(
          event.toLowerCase()
        ) !== -1;
      }
      if (e.email.toLowerCase().includes(event.toLowerCase())) {
        return e.email.toLowerCase().search(
          event.toLowerCase()
        ) !== -1;
      }
      else {
        return null
      }
    })
    this.setState({
      items: filters
    })
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Fake data is being fetched from the <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a> API.
        </p>
        <div className="App-container">
          <SearchBar onTermChange={this.handleChange} />
          <TableList users={this.state.items} />
        </div>
      </div>
    )
  }
}

export default App;
