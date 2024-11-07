import React, { useState } from 'react';

const Scheduler = () => {
    const [events, setEvents] = useState([]);
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [error, setError] = useState('');

    const validateAndAddEvent = () => {
        const start = parseInt(startTime, 10);
        const end = parseInt(endTime, 10);

        if (isNaN(start) || isNaN(end) || start < 0 || end > 23 || start >= end) {
            setError('Invalid input: Start time must be less than end time (0-23).');
            return;
        }

        const overlap = events.some(
            (event) =>
                !(event.end_time <= start || event.start_time >= end)
        );

        if (overlap) {
            setError('Event overlaps with an existing event.');
        } else {
            setEvents([...events, { start_time: start, end_time: end }]);
            setStartTime('');
            setEndTime('');
            setError('');
        }
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Daily Event Scheduler</h1>
            <div style={{ marginBottom: '20px' }}>
                <label>
                    Start Time (0-23):{' '}
                    <input
                        type="number"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        min="0"
                        max="23"
                    />
                </label>
                <label style={{ marginLeft: '10px' }}>
                    End Time (0-23):{' '}
                    <input
                        type="number"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        min="0"
                        max="23"
                    />
                </label>
                <button
                    onClick={validateAndAddEvent}
                    style={{
                        marginLeft: '10px',
                        padding: '5px 10px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Add Event
                </button>
            </div>
            {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
            <h2>Scheduled Events</h2>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event.start_time}:00 - {event.end_time}:00
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Scheduler;
