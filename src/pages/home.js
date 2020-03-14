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
                <Row>
                    <Col size='lg-12'>
                    <p>Home Page</p>
                    {/* <Table>
                        <TableRow scope="row" name="Eddie">

                        </TableRow>
                    </Table> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;