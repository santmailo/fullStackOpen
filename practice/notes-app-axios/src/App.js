import { useState, useEffect } from 'react';
import axios from 'axios';
import noteService from './services/notes'
import Notification from "./components/notification"

import Note from './components/Note'; 

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  // const [showAll, setShowAll] = useState(true);

//   const hook = () => {
//     axios.get('http://localhost:3001/notes')
//     .then(response => {
//       setNotes(response.data);  
//     })
// }

//   useEffect(hook,[]);


useEffect(() => {
  noteService
    .getAll()
    .then(response => {
      setNotes(response.data)
    })
    
}, [])

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content : newNote,
      important: Math.random()<0.5,
    } 

    
    noteService
    .getAll()
    .then(response => {
      setNotes(response.data)
    })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  // method to show all the value or filtered value

  // const notesToShow = showAll
  // ? notes
  // : notes.filter(note => note.important === true);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    axios.put(url, changedNote).then(response => {
      noteService
      .update(id, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      }).catch(error => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id))
      })
    })  }


  return (
        <div className="App">
          <h1>Notes</h1>
          <Notification message={errorMessage} />

          <ul>
            {notes.map(note => 
              <Note key={note.id} note={note} toggleImportance={() => 
                toggleImportanceOf(note.id)
              } />
            )}
          </ul>

          <form onSubmit={addNote}> 
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Add</button>
      </form>

      <Footer />
    </div>
  );
}

export default App;
