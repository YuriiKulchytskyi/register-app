import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParticipantsByEventId } from "../../redux/operations";
import css from "./showparticipants.module.css"
import PropTypes from "prop-types";

export const ShowParticipants = ({ event }) => {
    const dispatch = useDispatch();
    const participants = useSelector(state => state.slice.participants);

    useEffect(() => {
        if (event?._id) {
            dispatch(getParticipantsByEventId(event._id));
        }
    }, [dispatch, event._id]);

    return (
        <div className={css.participantsContainer}>
            <h3 className={css.title}>Registered Participants</h3>
            <ul className={css.participantsList}>
                {participants.length > 0 ? (
                    participants.map((participant) => (
                        <li key={participant._id} className={css.participantItem}>
                            <p className={css.participantName}>{participant.fullName}</p>
                            <p className={css.participantEmail}>{participant.email}</p>
                        </li>
                    ))
                ) : (
                    <p className={css.noParticipants}>No participants registered for this event.</p>
                )}
            </ul>
        </div>
    );
};

ShowParticipants.propTypes = {
    event: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string,
    }).isRequired,
};