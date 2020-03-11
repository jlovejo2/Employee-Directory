import React from 'react';

function thead(props) {
    return ( 
    <thead {...props}>
        {props.children}
    </thead> )
}

export default thead;