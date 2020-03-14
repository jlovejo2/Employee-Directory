import React from 'react';


function tableRow(props) {
    // console.log(props.key);
    return (
        <tr>
            <th scope={props.scope}>{props.num + 1}</th>
            <td>{props.firstName} {props.lastName}</td>
            <td>
                <img src={props.image} alt='thumbnail'></img>
            </td>
            <td>{props.address}</td>
            <td>{props.email}</td>
            <td>{props.years}</td>
        </tr>
    )

}

export default tableRow;