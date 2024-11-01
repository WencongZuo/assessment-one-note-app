import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { Button, Row } from '../components';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const nav = useNavigate();
    let [notes, setNotes] = useState([]);

    useEffect(() => {
        let storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

    function displayAll() {
        let storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            notes = JSON.parse(storedNotes);
        }

        const renderedRows = [];
        notes.forEach(note => { renderedRows.push(Row(notes.indexOf(note))) });
        return renderedRows;
    }

    return (
        <div className={styles.container}>
            <h1>My Note List</h1>
            <table>
                <thead>
                    <tr>
                        <th></th><th></th>
                    </tr>
                </thead>
                {displayAll()}
            </table>

            <Button title="Add New Note" onClick={() => nav("add")}  variant="primary"/>
        </div>
    );
}