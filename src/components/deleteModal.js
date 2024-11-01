import Modal from 'react-bootstrap/Modal';
import { Button } from './button.js';

const DeleteModal = (props) => {
    const { show, onHide, onClick } = props;

    return (
        <>
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Warning! Do you really want to delete this note? You will lose everything you saved</Modal.Body>
                <Modal.Footer>
                    <Button title="Close" variant="secondary" onClick={onHide} />
                    <Button title="Delete" variant="danger" onClick={() => {
                        onClick();
                        onHide();
                    }} />

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteModal