import React from 'react';

const TableItem = (user) => {
  return(
    <tr>
      <td>{user.item.name}</td>
      <td>{user.item.email.toLowerCase()}</td>
    </tr>
  )
}

export default TableItem;
