import React from 'react';
import "react-widgets/styles.css";
import Calendar from "react-widgets/Calendar";

const CalendarWidget = () => {
    return (
        <Calendar
            defaultValue={new Date()}
            min={new Date()}
        />
    );
};

export default CalendarWidget;