import React from 'react';
import Container from "../components/container";
import Row from "../components/row";
import Col from "../components/col";

function Home () {
    return (
        <div>
            <Container>
                <Row>
                    <Col size='lg-12'>
                    <p>Home Page</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;