import React from 'react';
import './style.css';


function unorderderList(props) {
    // console.log(props.key);
    return (
        <ul className={props.bootStrapList ? 'list-group' : ''}>
            <li>Click on column headers "full name" and "Years With Company" to flip employees from ascending to descending</li>
            <li>The search bar below and pulldown allow for the employees to be filtered by the selected criteria in dropdown</li>
            <li>To get all the employees back select the All Employees option in dropdown and type any letter</li>
        </ul>
    )
}

export default unorderderList;