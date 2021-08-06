import React, { useState } from 'react';

import './App.css';
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

// import notes from './notes'


function App() {
  const [notes,setNotes] = useState([]);
  function addNote(note){
      setNotes(prevNotes=>{
        return [...prevNotes,note]
      })
      console.log(notes);
  }

  function removeNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((note,index)=>{
        return id!==index
      })
    })
  }
  return (
    <div className="App">
     <Header/>
     <CreateArea onAdd={addNote}/>
     {notes.map((note,index) => {return <Note key={index} id={index} onDelete={removeNote} title={note.title} content={note.content}/>})}
    
     <Footer/>
    </div>
  );
}

export default App;
