import React from 'react';


function searchTable(props) {
    // console.log(props.key);
    return (
        <div className="input-group mb-3">

            <select className="custom-select-sm" value={props.value} onChange={props.selectChange}>
                <option defaultValue="allEmployees">All Employees</option>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="yearsWithCompany">Years With Company</option>
            </select>
            <input type="text" className="form-control" onChange={props.filterFunc} ></input>

        </div>
    )

}

export default searchTable;