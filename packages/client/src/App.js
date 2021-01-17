import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { EventsList } from './components/events/EventsList';
import './App.css';

function App() {
    return (
        <div className="App">
            <EventsList />
        </div>
    );
}

export default App;
