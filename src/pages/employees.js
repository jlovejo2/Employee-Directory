import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
// import Table from '../components/table';
import TableRow from '../components/tableRow';

class Employees extends Component {

    state = {
        employeeResArr: [],
    };

    componentDidMount() {
        console.log('found employees');
        this.loadEmployees()

    };

    onSort(event, sortKey) {

        const employeeData = this.state.employeeResArr
        employeeData.sort((employee1, employee2) => {
            return employee1[sortKey].localeCompare(employee2[sortKey])
        })
        this.setState({employeeData})
        }

    // handleBtnClick = event => {
    //     const 

    // }

    loadEmployees = () => {
        API.getEmployees()
            .then(res => {
                console.log(res);

                const employeeArr = res.data.results.map((employeeObj) => {
                    const obj = {
                        name: employeeObj.name.first,
                        image: employeeObj.picture.medium,
                        email: employeeObj.email,
                        address: employeeObj.location.street.number + " " + employeeObj.location.street.name + " " + employeeObj.location.city + ", " + employeeObj.location.state,
                    }
                    // console.log(obj);
                    return obj

                });

                // console.log(employeeArr);
                this.setState({ employeeResArr: employeeArr })

            })
    };

    render() {
        console.log('rendering');
        console.log(this.state.employeeResArr);
        // console.log(divToRender);
        return (
            <div>
                <Container>
                    <Row>
                        <Col size='lg-12'>
                            <p>Employees</p>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope='col'>#</th>
                                        <th scope='col' onClick={e => this.onSort(e, 'name')}>Full Name</th>
                                        <th scope='col'>Picture</th>
                                        <th scope='col'>Address</th>
                                        <th scope='col'>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.employeeResArr.map((value, index) => {
                                    return <TableRow 
                                    scope="row"
                                     key={index}
                                     num={index}
                                     name={value.name} 
                                     image={value.image} 
                                     email={value.email}
                                      address={value.address}
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