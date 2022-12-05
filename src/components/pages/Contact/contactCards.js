import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function contactCards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>Contact Information:</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Github: </ListGroup.Item>
        <ListGroup.Item>Email: sindidreedh@gmail.com</ListGroup.Item>
        <ListGroup.Item>Phone Number: (917) 519-8968</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default contactCards;