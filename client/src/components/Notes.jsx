import React, {useEffect, useState} from 'react';
import "./Navbar.css"

function Notes() {
  const [notes, setNotes] = useState([{
    title: '',
    content: ''
  }])  

  useEffect(() => {
    fetch("/notes").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes));
  })
  return (
    <>
      <div className='container'>
        {notes.map(note => 
          <div className='notesTextContainer'>
            <div className='notesText'>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
            </div>
            <div className='notesBtn'>
              <button className='notesBtnPost'>Follow</button>
              <button className='notesBtnEdit'>Delete</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Notes