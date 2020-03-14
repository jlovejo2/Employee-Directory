import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
// import Table from '../components/table';
import TableRow from '../components/tableRow';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeResArr: [],
            filteredEmployees: [],
            value: 'firstName',
            sortAsc: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        this.loadEmployees()

    };

    onSort(event, sortKey) {
        console.log('sorting')

        const employeeData = this.state.employeeResArr
        employeeData.sort((employee1, employee2) => {
            return employee1[sortKey].localeCompare(employee2[sortKey])
        })
        this.setState({ employeeData })
    }


    //map through the filter of 
    onFilter(event, filterKey, value) {
        console.log('filtering')
        console.log(value);
        console.log(filterKey);

        if (value === "firstName") {
            const employeeData = this.state.employeeResArr
            const filterEmployees = employeeData.filter((employee) => employee.firstName === filterKey)
            this.setState({ filteredEmployees: filterEmployees })
        } else if (value === 'lastName') {
            const employeeData = this.state.employeeResArr
            const filterEmployees = employeeData.filter((employee) => employee.lastName === filterKey)
            this.setState({ filteredEmployees: filterEmployees })
        } else if (value === 'yearsWithCompany') {
            const employeeData = this.state.employeeResArr
            //The "==" was done intentionally in below lines of code.  It is because user is typing in the info in an input box which is coming back as a string
            //While respone from axios call for registered age is an integer
            const filterEmployees = employeeData.filter((employee) => employee.yearsWithCompany == filterKey)
            this.setState({ filteredEmployees: filterEmployees })
        }
    }

loadEmployees = () => {
    API.getEmployees()
        .then(res => {
            console.log('employees loaded');
            console.log(res);

            const employeeArr = res.data.results.map((employeeObj) => {
                const obj = {
                    firstName: employeeObj.name.first,
                    lastName: employeeObj.name.last,
                    image: employeeObj.picture.medium,
                    email: employeeObj.email,
                    address: employeeObj.location.street.number + " " + employeeObj.location.street.name + " " + employeeObj.location.city + ", " + employeeObj.location.state,
                    yearsWithCompany: employeeObj.registered.age
                }
                
                return obj

            });

            
            this.setState({ employeeResArr: employeeArr });
            this.setState({ filteredEmployees: employeeArr });

        })
};

handleChange(event) {
    console.log('handle change');

    this.setState({ value: event.target.value });
}

render() {
    console.log('rendering');
    console.log(this.state.value);
    console.log(this.state.employeeResArr);
    console.log(this.state.filteredEmployees);
    return (
        <div>
            <Container>
                <Row center='true'>
                    <Col size='lg-12'>
                        <br></br>
                        <p>
                            <h3>Welcome to the Employees Page!!</h3>
                            <strong>There are a handful of options for interacting with this table</strong>
                            <ul>
                                <li>Click on column names to flip employees from ascending to descending</li>
                                <li>The search bar below and pulldown allow for the employees to be filtered the selected criteria</li>
                            </ul>
                        </p>
                        <br></br>
                        <div class="input-group mb-3">

                            <select class="custom-select-sm" value={this.state.value} onChange={this.handleChange}>
                                <option selected value="firstName">First Name</option>
                                <option value="lastName">Last Name</option>
                                <option value="yearsWithCompany">Years With Company</option>
                            </select>
                            <input type="text" class="form-control" onChange={e => this.onFilter(e, e.target.value, this.state.value)} ></input>

                        </div>

                        <br></br>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope='col'>#</th>
                                    <th scope='col' onClick={e => this.onSort(e, 'firstName')}>Full Name</th>
                                    <th scope='col'>Picture</th>
                                    <th scope='col'>Address</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'onClick={e => this.onSort(e, 'yearsWithCompany')}>Years With Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.filteredEmployees.map((value, index) => {
                                        return <TableRow
                                            scope="row"
                                            key={index}
                                            num={index}
                                            firstName={value.firstName}
                                            lastName={value.lastName}
                                            image={value.image}
                                            email={value.email}
                                            address={value.address}
                                            years={value.yearsWithCompany}
                                        />
                                    })
                                }
                            </tbody>

                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
}


export default Employees;