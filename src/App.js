import React from 'react';
import './App.css';
import TableList from './table-list';
import SearchBar from './search';
import Pagination from './pagination';
import * as packageJSON from '../package.json';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      generatedUsers: [],
      filteredUsers: [],
      pageOfItems: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
    this.handlePageSize = this.handlePageSize.bind(this);
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=100&nat=us')
      .then(res => {
        return res.json()
      })
      .then(data => {
        let generatedUsers = data.results.map(user => {
          return user;
        });
        this.setState({
          generatedUsers: generatedUsers,
          filteredUsers: generatedUsers
        });
      });
  }

  handleChange(event) {
    let filtered = this.state.generatedUsers;
    filtered = filtered.filter((e) => {
      if (e.name.first.toLowerCase().includes(event.toLowerCase())) {
        return e.name.first.toLowerCase().search(
          event.toLowerCase()
        ) !== -1;
      }
      if (e.name.last.toLowerCase().includes(event.toLowerCase())) {
        return e.name.last.toLowerCase().search(
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
      filteredUsers: filtered
    });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({
      pageOfItems: pageOfItems
    });
  }

  handlePageSize(event) {
    this.setState({
      [event.target.name]: Number(event.target.value)
    });
  }

  render() {
    return(
      <div>
        <header className="container mt-5 mb-5">
          <h1 className="text-center">Random User Generator</h1>
          <p className="lead text-center">This is a sample React app showcasing the ability to search through data, and offering pagination. Data is being fetched from the <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">randomuser.me</a> API. The source code can be found on <a href="https://github.com/danielyewright/react-search-app" target="_blank" rel="noopener noreferrer">GitHub</a>; feel free to clone/fork the project and make it better : )</p>
        </header>
        <div className="container">
          <p className="lead text-center mt-5 mb-5 d-none">
            Fake data is being fetched from the <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">randomuser.me</a> API.
          </p>
          <div>
            <SearchBar onTermChange={this.handleChange} />
            <TableList users={this.state.pageOfItems} />
          </div>
          <hr />
          <div className="row mb-5">
            <div className="col-sm-6 text-left">
              {
                this.state.pageOfItems.length <= 9 ? (
                  null
                ) : <div className="form-inline page-items">
                  <div className="form-group">
                    <label htmlFor="pageSize" className="no-bold">Items per page: &nbsp;</label>
                    <select name="pageSize" className="form-control" value={this.state.pageSize} onChange={this.handlePageSize}>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              }
            </div>
            <div className="col-sm-6 text-right">
              <Pagination items={this.state.filteredUsers} pageSize={this.state.pageSize} onChangePage={this.onChangePage} />
            </div>
          </div>
          <p className="text-center text-muted text-sm">Version {packageJSON.version}</p>
        </div>
      </div>
    )
  }
}

export default App;
