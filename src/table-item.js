import React from 'react';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');
}

const TableItem = (user) => {
  return(
    <tr>
      <td>
        <img src={user.item.picture.thumbnail} className="" alt="User avatar" />
      </td>
      <td>{capitalize(user.item.name.first) + ' ' + capitalize(user.item.name.last)}</td>
      <td>
        {user.item.location.street},<br />
        {capitalize(user.item.location.city)}, {capitalize(user.item.location.state)} {user.item.location.postcode}
      </td>
      <td>{user.item.email.toLowerCase()}</td>
      <td>{user.item.dob.age}</td>
    </tr>
  )
}

export default TableItem;
