import React from 'react';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');
}

const TableItem = (user) => {
  return(
    <tr>
      <td>{capitalize(user.item.name.first) + ' ' + capitalize(user.item.name.last)}</td>
      <td>{user.item.email.toLowerCase()}</td>
    </tr>
  )
}

export default TableItem;
