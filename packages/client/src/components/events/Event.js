import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';

const Event = ({
    name,
    description
}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description.length > 300 ? description.slice(0,300).concat('...') : description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Event;
