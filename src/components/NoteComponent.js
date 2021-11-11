import React, {useContext, useEffect, useState} from "react"
import NotesContext from "../context/notes-context";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0})

  useEffect(() => {
    const handleMouseMove = (e) => {
        setPosition({
          x: e.pageX,
          y: e.pageY
        })
      }
    
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  },[])

  return position
}

const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext)
    const position = useMousePosition();

    return (
      <div>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <p>{position.x}-{position.y}</p>
      <button onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title})}>X</button>
    </div>
    )
  }

  export default Note;