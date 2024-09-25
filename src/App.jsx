import { useState } from 'react'
import css from './App.module.css'
import { EventList } from './components/EventList/EventList'
import { Modal } from './components/Modal/Modal';
import { AddEventForm } from './components/AddEventForm/AddEventForm';

function App() {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  

  return (
    <div className={css.appWrapper}>
      <EventList />
      <button className={css.button} onClick={openModal}>Add Event</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddEventForm onClick={closeModal} />
      </Modal>
      



    </div>
  )
}

export default App
