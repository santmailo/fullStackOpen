import { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note'; 


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");  
    axios.get('http://localhost:3001/notes')
    .then(response => {
      console.log("promise fulfilled");
      setNotes(response.data);  
    })
}

  useEffect(hook,[]);

  console.log("render", notes.length, "notes");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content : newNote,
      important: Math.random()<0.5,
      id:notes.length+1
    }

    setNotes(notes.concat(noteObject));
    setNewNote("");
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  }

  // method to show all the value or filtered value

  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true);


  return (
    <div className="App">
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note.content} />
        )}
      </ul>

      <form onSubmit={addNote}> 
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Add</button>
      </form>

    </div>
  );
}

export default App;
