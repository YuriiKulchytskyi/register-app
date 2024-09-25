import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../../redux/operations';
import css from "./addeventform.module.css";


export const AddEventForm = (onClick) => {
    const dispatch = useDispatch();
    const [eventTitle, setEventTitle] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventOrganizer, setEventOrganizer] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        const newEvent = {
            title: eventTitle,
            description: eventDescription,
            organizer: eventOrganizer,
            eventDate: date,
        };
        
        console.log(newEvent);
        dispatch(addEvent(newEvent)); 
        setEventTitle('');
        setEventDescription('');
        setEventOrganizer('');
        setDate('');
        onClick
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                placeholder="Event Title"
                required
            />
            <textarea
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder="Event Description"
                required
            ></textarea>
            <input
                type="text"
                value={eventOrganizer}
                onChange={(e) => setEventOrganizer(e.target.value)}
                placeholder="Event Organizer"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">Add Event</button>
        </form>
    );
};
