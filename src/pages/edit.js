import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './page.module.css';
import { Button } from '../components';
import { useAlert } from "react-alert";

export function Edit() {
    let { id } = useParams();
    let [title, setTitle] = useState();
    let [content, setContent] = useState();
    let [notes, setNotes] = useState([]);
    let currentTitle;
    let currentContent;
    let parsedNotes;
    let storedTitle;
    let storedContent;
    const nav = useNavigate();
    const alert = useAlert();

    useEffect(() => {
        let storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            parsedNotes = JSON.parse(storedNotes);
            setNotes(parsedNotes);
        }
    }, []);

    useEffect(() => {
        if (notes[id]) {
            storedTitle = notes[id].title;
            setTitle(storedTitle);
            sessionStorage.setItem('title', storedTitle);
            storedContent = notes[id].content;
            setContent(storedContent);
            sessionStorage.setItem('content', storedContent);
        }
    }, [notes]);

    function onInputChange(event) {
        currentTitle = event.target.value;
        setTitle(currentTitle);
        sessionStorage.setItem('title', currentTitle);
    }

    function onTextAreaChange(event) {
        currentContent = event.target.value;
        setContent(currentContent);
        sessionStorage.setItem('content', currentContent);
    }

    function onSaveClick() {
        const newNotes = [...notes];
        const titleRecord = sessionStorage.getItem('title');
        const contentRecord = sessionStorage.getItem('content');
        const note = { title: titleRecord, content: contentRecord }
        newNotes[parseInt(id, 10)] = note;
        setNotes(newNotes);

        const stringified_Notes = JSON.stringify(newNotes);
        localStorage.setItem('notes', stringified_Notes);
        sessionStorage.clear();
        alert.success("Note has been successfully changed");
        nav("/");
    }

    return (
        <div>
            <h1>Edit Note</h1>
            <form className={styles.form}>
                <label htmlFor="titleInput">Please enter note title: </label>
                <input id="titleInput" placeholder="Title" value={title} onChange={onInputChange} />
                <br />
                <label htmlFor="contentInput">Please enter content: </label>
                <textarea id="contentInput" placeholder="My Note" value={content} onChange={onTextAreaChange} rows="25" cols="100" />
                <Button title="Save" onClick={onSaveClick} />
            </form>
        </div>
    );
}