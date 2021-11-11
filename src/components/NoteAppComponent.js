import React, {useReducer, useEffect, useState} from "react";
import notesReducer from "../reducers/notesReducer";
import NotesContext from "../context/notes-context";
import NoteList from "./NoteListComponent";
import AddNoteForm from "./NoteFormComponent";

const NoteApp = () => {
  
    const [notes, dispatch] = useReducer(notesReducer, []) //reducer e estado inicial

    useEffect(() => {
      const notes = JSON.parse(localStorage.getItem('notes'))
      if (notes) {
        dispatch({ type: 'POPULATE_NOTES', notes})
      }
    },[])
    
    useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes))
    },[notes])
  
    return (
      <NotesContext.Provider value={{ notes, dispatch }}>
        <h1>My Notes</h1>
        <NoteList />
        <AddNoteForm />
      </NotesContext.Provider>
    )
  }  

  export default NoteApp;