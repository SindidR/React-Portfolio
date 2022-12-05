import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutCards from './aboutCards';
import React from 'react';

function About() {
    return (
        <Container>
            <Row>
                <Col>
                    <aboutCards
                        title1="Introduction"
                        title="Introduction"
                        text="Hello, My name is Sindid Reedh and in this section you will get to know more about me."
                    />
                </Col>
                <Col>
                    <aboutCards
                        title2="Background"
                        title="Background"
                        text="I am currently a Columbia Full Stack Bootcamp student who is also enrolled in StonyBrook University as a Computer Science Major"
                    />
                </Col>
                <Col>
                    <aboutCards
                        title3="Motive"
                        title="Motive"
                        text="My hunger for knowledge led me to venture into the realm of coding in which I enjoyed. Much more then my previous major of Biomedical Engineering. So I took the leap and switched and haven't looked back since. With my knowledge of coding increasing over the months and years my goal is to eventually make Apps that will have a positive impact on numerous peoples lives."
                    />
                </Col>
            </Row>
        </Container>
    );
}
About()
