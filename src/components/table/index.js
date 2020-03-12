import React from 'react';
// import thead from './components/thead'

function table(props) {
    return (
        <table className="table" {...props}>
            <thead className="thead-dark">
                <tr>
                    <th scope={props.scope}>#</th>
                    <th scope={props.scope}>Full Name</th>
                    <th scope={props.scope}>Address</th>
                    <th scope={props.scope}>Email</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default table;