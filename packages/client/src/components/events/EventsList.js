import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import axios from 'axios';
import { Event } from './Event';

export function EventsList() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getEvents = async () => {
        setLoading(true);
        setError(false);
        await axios
            .get(`/api/events`)
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                setError(true);
            });
        setLoading(false);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <StyledListContainer>
            <h1>Triathlon Events</h1>
            {loading && (
                <StyledSpinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </StyledSpinner>
            )}
            {error && (
                <StyledAlert variant="danger">
                    Uh oh! Error fetching events data. Please refresh.
                </StyledAlert>
            )}
            {!!events.length &&
                events.map((event, index) => {
                    return (
                        <div key={`event ${index}`}>
                            <Event
                                name={event.name}
                                locationName={event.location?.name}
                                locationCoords={event.location?.geo}
                                date={event.date}
                                description={event.description}
                                type={event.type?.[0]}
                            />
                        </div>
                    );
                })}
        </StyledListContainer>
    );
}

const StyledListContainer = styled.div`
    width: 95%;
    margin: auto;
`;

const StyledSpinner = styled(Spinner)`
    margin: auto;
`;

const StyledAlert = styled(Alert)`
    margin: auto;
`;
