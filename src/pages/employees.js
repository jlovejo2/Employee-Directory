import React, { Component } from "react";
import API from '../utils/API';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
import Table from '../components/table';
import TableRow from '../components/tableRow';

class Employees extends Component {
    state = {
        image: '',
        name: '',
    }

    componentDidMount() {
        this.loadEmployees();
    }

    loadEmployees = () => {
        API.getEmployees()
            .then(res => {
                console.log(res);
                this.setState(
                    {
                        image: res.data.results[0].picture.medium,
                        name: res.data.results[0].name.first + " " + res.data.results[0].name.last,
                        email: res.data.results[0].email,
                        address: res.data.results[0].location.street.number + " " + res.data.results[0].location.street.name + " " + res.data.results[0].location.city + ", " + res.data.results[0].location.state
                    }
                    )
            })
    }

    render() {
        return (
            <div>
            <Container>
                <Row>
                    <Col size='lg-12'>
                    <p>Home Page</p>
                    <Table scope='col'>
                        <TableRow scope="row" name={this.state.name} image={this.state.image} email={this.state.email} address={this.state.address}>

                        </TableRow>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    }
}

export default Employees;