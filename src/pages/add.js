import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './page.module.css';
import { Button } from '../components';
import { useAlert } from "react-alert";

export function Add() {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    let [notes, setNotes] = useState([]);
    let currentTitle;
    let currentContent;
    const nav = useNavigate();
    const alert = useAlert();

    useEffect(() => {
        let storedNotes = localStorage.getItem('notes');
        if (storedNotes) {
            setNotes(JSON.parse(storedNotes));
        }
    }, []);

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

    function onSubmitClick() {
        const titleRecord = sessionStorage.getItem('title');
        const contentRecord = sessionStorage.getItem('content')
        const note = { title: titleRecord, content: contentRecord }
        notes.push(note);
        const stringified_notes = JSON.stringify(notes);
        localStorage.setItem('notes', stringified_notes);
        sessionStorage.clear();
        alert.success("Note has been added");
        nav("/");
    }

    return (
        <div>
            <h1>Add New Note</h1>
            <form className={styles.form}>
                <label htmlFor="titleInput">Please enter note title: </label>
                <input id="titleInput" placeholder="Title" value={title} onChange={onInputChange} />
                <br />
                <label htmlFor="contentInput">Please enter content: </label>
                <textarea id="contentInput" placeholder="My Note" value={content} onChange={onTextAreaChange} rows="15" cols="50" />
                <span>
                    <Button title="Submit" onClick={onSubmitClick} />
                    <Button title="Back" variant="secondary" onClick={() => nav("/")} />
                </span>
            </form>
        </div>
    );
}