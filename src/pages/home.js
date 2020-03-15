import React from 'react';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";
// import Table from '../components/table';
// import TableRow from '../components/tableRow';


function Home () {
    return (
        <div>
            <Container>
                <Row center='true'>
                    <Col size='lg-12'>
                    <h1>This is the Home Page</h1>
                    <p>Welcome Welcome Welcome</p>
                   
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;