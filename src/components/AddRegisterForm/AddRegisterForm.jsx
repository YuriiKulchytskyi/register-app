import { useState } from "react";
import css from "../AddEventForm/addeventform.module.css";
import { useDispatch } from "react-redux";
import { addParticipantToEvent } from "../../redux/operations";
import PropTypes from "prop-types";

export const AddRegisterForm = ({ onClose, event }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [source, setSource] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        const newRegister = {
            fullName,
            email,
            dateOfBirth,
            source,
        };

        dispatch(addParticipantToEvent({ _id: event._id, participantData: newRegister }));

        setFullName("");
        setEmail("");
        setDateOfBirth("");


        onClose();
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                placeholder="Date of Birth"
                required
            />

            <div>
                <p>Where did you hear about this event?</p>
                <label htmlFor="Social media">
                    <input
                        id="Social media"
                        type="radio"
                        value="Social media"
                        name="source"
                        onChange={(e) => setSource(e.target.value)}
                    />
                    Social media
                </label>

                <label htmlFor="Friends">
                    <input
                        id="Friends"
                        type="radio"
                        value="Friends"
                        name="source"
                        onChange={(e) => setSource(e.target.value)}
                    />
                    Friends
                </label>
                <label htmlFor="Found myself">
                    <input
                        id="Found myself"
                        type="radio"
                        value="Found myself"
                        name="source"
                        onChange={(e) => setSource(e.target.value)}
                    />
                    Found myself
                </label>
            </div>

            <button type="submit">Register</button>
        </form>
    );
};


AddRegisterForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    event: PropTypes.shape({
        _id: PropTypes.string.isRequired,
    }).isRequired,
};