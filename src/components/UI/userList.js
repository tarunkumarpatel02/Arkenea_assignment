import React from 'react';

import Button from './button';
import './userList.css';

const UserList=(props)=>{
    // let formVal = [];
    // for (let key in props.rowData) {
    //     formVal.push({
    //         id: key,
    //         key: props.rowData[key]
    //     });
    // }
    const rowData = props.rowData.map(el=>( 
                <tr>
                    <td>{el.Fullname}</td> 
                    <td>{el.DOB}</td> 
                    <td>{el.Languages}</td> 
                    <td>{el.Gender}</td> 
                    <td>{el.About}</td> 
                </tr> 
    ))
    return(
        <div className="userList">
            <h2>Users List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Languages</th>
                        <th>Gender</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {rowData}
                </tbody>
            </table>
            <Button click={props.click}/>
        </div>
    )
}

export default UserList;