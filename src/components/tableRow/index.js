import React from 'react';


function tableRow(props) {

    return (
        <tr>
            <th scope={props.scope}></th>
            <td>
                <img src={props.image} alt='thumbnail'></img>
                </td>
            <td>{props.address}</td>
            <td>{props.email}</td>
        </tr>
    )

}

export default tableRow;