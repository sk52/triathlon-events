import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { EventModal } from './EventModal';

export function Event({
    name,
    locationName,
    locationCoords,
    date,
    description,
    type
}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <StyledCard>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <StyledList style={{ 'list-style-type': 'none' }}>
                        {date && (
                            <li>
                                <StyledCardSubtitle>
                                    <Icon name="calendar alternate outline" />
                                    {date}
                                </StyledCardSubtitle>
                            </li>
                        )}
                        {locationName && (
                            <li>
                                <StyledCardSubtitle>
                                    <Icon name="location arrow" />
                                    {locationName}
                                    {locationCoords &&
                                        locationCoords.lat &&
                                        locationCoords.long && (
                                            <>
                                                {' '}
                                                -{' '}
                                                <a
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    href={`https://www.google.com/maps/place/${locationCoords.lat},${locationCoords.long}`}
                                                >
                                                    <Icon name="external alternate" />
                                                </a>
                                            </>
                                        )}
                                </StyledCardSubtitle>
                            </li>
                        )}
                        {type && (
                            <li>
                                <StyledCardSubtitle>{type}</StyledCardSubtitle>
                            </li>
                        )}
                    </StyledList>
                    <Card.Text>
                        {description.length > 120
                            ? description.slice(0, 120).concat('...')
                            : description}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        View event
                    </Button>
                </Card.Body>
            </StyledCard>
            <EventModal
                name={name}
                description={description}
                show={show}
                onHide={handleClose}
            ></EventModal>
        </>
    );
}

const StyledCard = styled(Card)`
    width: 100%;
    max-width: 950px;
    margin: 20px auto;
`;

const StyledCardSubtitle = styled(Card.Subtitle)`
    margin-bottom: 10px;
`;

const StyledList = styled.ul`
    list-style-type: none;
    padding: 0;
`;
