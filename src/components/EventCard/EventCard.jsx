import PropTypes from "prop-types";
import css from "./eventcard.module.css";
import { Modal } from "../Modal/Modal";
import { ShowParticipants } from "../ShowParticipants/ShowParticipants";
import { useState } from "react";


export const EventCard = ({ event, onDelete, onOpen }) => {

    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => {
        setModalOpen(true)
    }

    const handleCloseModal = () => {
        setModalOpen(false)
        
    }

    return (
        <div>
            <div className={css.eventWrapper}>
                <p className={css.eventTitle}>{event.title}</p>
                <p className={css.eventDescription}>{event.description}</p>
                <div className={css.buttonWrapper}>
                    <button className={css.button} onClick={handleModalOpen}>Show participants</button>
                    <button className={css.button} onClick={onDelete}>Delete</button>
                    <button className={css.button} onClick={onOpen}>Register</button>
                </div>
            </div>
            {modalOpen && <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                <ShowParticipants event={event} />
            </Modal>}
        </div>
    );
};


EventCard.propTypes = {
    event: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired,
};