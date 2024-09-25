import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEventById, getAllEvents, getParticipantsByEventId } from "../../redux/operations";
import { EventCard } from "../EventCard/EventCard";
import css from './eventlist.module.css';
import { Modal } from "../Modal/Modal";
import { AddRegisterForm } from "../AddRegisterForm/AddRegisterForm";

export const EventList = () => {

    const events = useSelector((state) => state.slice.events); 
    const [openModal, setOpenModal] = useState(false); 
    const [selectedEvent, setSelectedEvent] = useState({}); 

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllEvents());
    }, [dispatch]);

    const handleDelete = async (id) => {
        await dispatch(deleteEventById(id));
        dispatch(getAllEvents())
    };

    const handleOpenModal = (event) => {
        setSelectedEvent(event);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedEvent(null); 
    };

    const handleParticipants = (id) => {
        dispatch(getParticipantsByEventId(id));
    }

    return (
        <div>
            <ul className={css.listWrapper}>
                {events.map((event) => (
                    <li key={event._id}>
                        <EventCard
                            event={event}
                            onDelete={() => handleDelete(event._id)}
                            onOpen={() => handleOpenModal(event)}
                            onClick={() => handleParticipants(event._id)}
                        />
                    </li>
                ))}
            </ul>
            {openModal && (
                <Modal isOpen={openModal} onClose={handleCloseModal}>
                    <AddRegisterForm event={selectedEvent} onClose={handleCloseModal} />
                </Modal>
            )}
        </div>
    );
};
