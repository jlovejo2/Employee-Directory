import React from 'react';


function tableRow(props) {
    console.log(props);
    return (
        <tr>
            <th scope={props.scope} key={props.key}></th>
            <td>{props.name}</td>
            <td>
                <img src={props.image} alt='thumbnail'></img>
            </td>
            <td>{props.address}</td>
            <td>{props.email}</td>
        </tr>
    )

}

export default tableRow;