import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import EventModal from './EventModal';

const Event = ({
    name,
    description
}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description.length > 300 ? description.slice(0,300).concat('...') : description}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>Go somewhere</Button>
            </Card.Body>
            </Card>
            <EventModal name={name} description={description} show={show} onHide={handleClose}></EventModal>
        </div>
    )
}

export default Event;
