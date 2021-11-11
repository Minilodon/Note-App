import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const addNote = (e) => {
        e.preventDefault();
        dispatch({ type : 'ADD_NOTES', title, text})
        setTitle('')
        setText('')
      }

    return (
        <div>
            <p>Add note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <button>Add note</button>
                <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
            </form>
        </div>
    ) 
}

export default AddNoteForm