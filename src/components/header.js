import React, {useState} from 'react';
import styles from './header.module.css';
import { Button } from './button.js';
import DeleteModal from './deleteModal.js';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const nav = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function clearAll() {
        localStorage.clear();
    }

    return (
        <header className={styles.container}>
            <h2 onClick={()=>{nav("/")}}>My Digital Notebook</h2>
            <Button title="Clear All" onClick={handleShow} variant="danger"/>
            <DeleteModal show={show} onHide={handleClose} onClick=
                {() => {
                    clearAll();
                    nav(0);
                }}/>
        </header>
    )
}