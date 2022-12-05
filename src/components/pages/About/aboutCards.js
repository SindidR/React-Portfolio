import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function aboutCards() {
    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#introduction">Introduction</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#background">Background</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#motive">Motive</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default aboutCards;