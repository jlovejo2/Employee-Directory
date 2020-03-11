import React from 'react';

function tbody(props) {
    return (
        <tbody {...props}>
            {props.children}
        </tbody>
    )
}

export default tbody;