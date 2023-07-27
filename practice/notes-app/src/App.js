import { useState } from 'react';
import Note from './components/Note';

function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

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
