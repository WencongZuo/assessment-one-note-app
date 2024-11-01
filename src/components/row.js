import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { Button } from './button.js';
import DeleteModal from './deleteModal.js';

export function Row(id) {
    let [notes, setNotes] = useState([]);
    const nav = useNavigate();
    const alert = useAlert();
    let storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
        notes = JSON.parse(storedNotes);
    }

    let title = (notes[id]).title;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function deleteNote(id) {
        notes.splice(id, 1);
        setNotes(notes);
        localStorage.setItem('notes', JSON.stringify(notes));
        nav(0);
        alert.error("Note has been deleted");
    }

    return (
        <tbody>
            <tr>
                <td><Link to={`/edit/${id}`}> {title} </Link></td>
                <td>
                    <Button title="Delete" onClick={handleShow} variant="danger"/> 
                    <DeleteModal show={show} onHide={handleClose} onClick={() => deleteNote(id)}/>
                </td>
            </tr>
        </tbody>
    )
}