import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function aboutCards(props) {
    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#introduction">{props.title1}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#background">{props.title2}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#motive">{props.title3}</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default aboutCards;