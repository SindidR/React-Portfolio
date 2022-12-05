import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import projectCards from './projectCards';
import React from 'react';

function Project() {
    return (
        <Container>
            <Row>
                <Col>
                    <projectCards
                        title="Marvel For Dummies"
                        description="Your one stop shop for all your Marvel needs! This application uses the Giphy API and the Marvel API to display a Gif and information on a Marvel Character."
                        link="https://sindidr.github.io/marvel-for-dummies/"
                        img={" "}
                    />
                </Col>
                <Col>
                    <projectCards
                        title="safeMed"
                        description="Prehistoric Prescription Databases are a thing of the past with safeMed! This application uses handlebars and express to allow a user in the medical field to input prescritpions and their respective prescriptions into a database that is user friendly."
                        link="https://project2-safe-med.herokuapp.com/"
                        img={" "}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Project;

