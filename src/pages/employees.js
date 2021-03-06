import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
// import Table from '../components/table';
import UnorderedList from '../components/unorderedList';
import SearchTable from '../components/searchTable'
import TableRow from '../components/tableRow';

class Employees extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //this is the state variable that api response is set to
            employeeResArr: [],
            //this is the state variable that filtered results is set to
            filteredEmployees: [],
            value: 'firstName',
            ascKey: false,
            };
        this.handleChange = this.handleChange.bind(this);
    }

    //This calls the function that loads the employees from the api call when the page mounts
    componentDidMount() {
        this.loadEmployees()
    };

    //Ths function sorts the table by what is in the clicked on column.
    //The first parameter is the event associated with the click (onClick is used)
    //The second parameter is the key of the values that are rendered into that column from the state employeeresArr
    //so for clicking on name columm sortKey deliver is 'firstName' so it sorts by first name of employee
    onSortString(event, sortKey, ascKey) {

        console.log('sorting string')
        const employeeData = this.state.employeeResArr

            if(!ascKey) {
            
            employeeData.sort((employee1, employee2) => {
                return employee1[sortKey].localeCompare(employee2[sortKey])
            })
        } else {
            console.log('reverse');
            employeeData.reverse()
        }

        this.setState({ ascKey: !ascKey });
        this.setState({ employeeData })
    }

    onSortNumber(event, sortKey, ascKey) {
        
        console.log('sorting number')
        const employeeData = this.state.employeeResArr

            if(!ascKey) {
            
            employeeData.sort((employee1, employee2) => {
                return employee1[sortKey] - employee2[sortKey]
            })
        } else {
            console.log('reverse');
            employeeData.sort((employee1, employee2) => { 
                return employee2[sortKey] - employee1[sortKey]
             })
        }

        this.setState({ ascKey: !ascKey });
        this.setState({ employeeData })
    }


    //This function uses three parameters.  The first is the event it is attached to this was mainly used for console.log and troubleshooting
    //The second parameter is the string that the employee table is being filtered against.  This is the input from the textbox
    //The third is the value that was selected in the dropdown menu.  This directs the code to the correct if-else block.
    onFilter(event, filterKey, value) {
        console.log('filtering')
       
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
            // eslint-disable-next-line
            const filterEmployees = employeeData.filter((employee) => employee.yearsWithCompany == filterKey)
            this.setState({ filteredEmployees: filterEmployees })
        } else {
            this.setState({ filteredEmployees: this.state.employeeResArr})
            // this.render()
        }
    }

    //This function interacts with the Api
    //It goes to the API file that is imported at top of page and then runs through that response object taking only the values needed and mapping them into a new array of employee objects
    //That new arr of employee objects is then set to the filteredEmployees state variable
    loadEmployees = () => {
        console.log('before API');
        API.getEmployees()
            .then(res => {
                console.log('employees loaded');

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

    //This function is used in the <Select/> to add the value the user select to the state variable
    handleChange(event) {
        console.log('handle change');
        this.setState({ value: event.target.value });
    }

    //This function is necessary to React.  It looks for it and uses it to render the jsx as html to the page
    render() {
        console.log('rendering');  
        return (
            <div>
                <Container>
                    <Row center='true'>
                        <Col size='lg-12'>
                            <br></br>
                                <h3>Welcome to the Employees Page!!</h3>
                                <strong>There are a handful of options for interacting with this table</strong>
                                <UnorderedList 
                                    bootStrapList={true}
                                />
                            <br></br>
                            <SearchTable
                                value={this.state.value}
                                selectChange={this.handleChange}
                                filterFunc={e => this.onFilter(e, e.target.value, this.state.value)}
                            />
                            <br></br>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col' onClick={e => this.onSortString(e, 'firstName', this.state.ascKey)}>Full Name</th>
                                        <th scope='col'>Picture</th>
                                        <th scope='col'>Address</th>
                                        <th scope='col'>Email</th>
                                        <th scope='col' onClick={e => this.onSortNumber(e, 'yearsWithCompany', this.state.ascKey)}>Years With Company</th>
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