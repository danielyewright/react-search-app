import React from 'react';
import TableItem from './table-item';

const TableList = (props) => {
    const listItems = props.users.map((user, index) => {
        return <TableItem key={index} item={user} />
    })

    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
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
