import React from 'react'
import { useState } from 'react';
import axios from "axios"

function Create() {
  const [input ,setInput] = useState({
    title: '',
    content: '',
  })

  function handleChange(event) {
    const { name, value }= event.target;
    setInput(prevInput => {
      return{
        ...prevInput,
        [name]: value
      }
    })
  }
  function handleClick(event){
    event.preventDefault();
    const newNote = {
      title: input.title,
      content: input.content
    }
    
    axios.post('http://localhost:3001/create', newNote)
  }

  return (
    <div className='container'>
        <h1>create a note</h1>
        <form>
          <div className="form-group">
            <input onChange={handleChange} className='form-control' value={input.title} name='title' placeholder='Note Title'></input>
          </div>
          <div className="form-group">
            <textarea onChange={handleChange} className='form-control' value={input.content} name='content' placeholder='Note Contents'></textarea>
          </div>
          <button onClick={handleClick} className='btn btn-lg btn-info'>Add Note</button>
        </form>
    </div>
  )
}

export default Create