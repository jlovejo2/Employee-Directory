import React from 'react';
// import thead from './components/thead'

function table(props) {
    console.log(...props)
    return (
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Full Name</th>
                    <th scope='col'>Address</th>
                    <th scope='col'>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default table;