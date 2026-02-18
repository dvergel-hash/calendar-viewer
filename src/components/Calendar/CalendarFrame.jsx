import React from 'react';
import './CalendarFrame.css';

const CalendarFrame = ({ url }) => {
    if (!url) return <div className="no-calendar">Selecciona una sala para ver el calendario</div>;

    return (
        <div className="calendar-container">
            <iframe
                src={url}
                title="Calendar"
                className="calendar-iframe"
                loading="lazy"
                allowFullScreen
            />
        </div>
    );
};

export default CalendarFrame;
