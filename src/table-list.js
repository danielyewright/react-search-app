import React from 'react';
import TableItem from './table-item';

const TableList = (props) => {
  const listItems = props.users.map((user, index) => {
    return <TableItem key={index} item={user} />
  });

  return(
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>
    </div>
  )
}

export default TableList;
