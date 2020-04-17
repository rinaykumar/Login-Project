import React from 'react';
import axios from 'axios'; // don't forget this
import Notes from '../components/Notes';
import { Redirect } from 'react-router-dom';

const UserPage = ({appUser, setAppUser}) => {
  // pass in default value into useState
  const [note, setNote] = React.useState(''); // create a state variable + setter
  const [notes, setNotes] = React.useState(['Demo note']); // if map of undefined 

  const fetchNotes = () => {
    // utility to get all notes
    axios.get('/api/getAllNotes')
      .then((res) => {
        console.log(res);
        setNotes(res.data.notes); // update state variable
      })
      .catch(console.log);
  };

  const submitNote = () => { // arrow/lambda function
    console.log(note);
    const body = {
      note: note
    };
    axios.post('/api/addNote', body)
      .then(() => setNote(''))
      .then(() => fetchNotes()) // fetch after submit
      .catch(console.log);
  };

  // this is a hook
  React.useEffect(() => {
    // this will load notes when the page loads
    fetchNotes();
  }, []); // pass empty array

  if(!appUser){
    return <Redirect to="/login" />;
  }

  // jsx
  return (
    <div>
      <h1>User page</h1>
      <div>
        <div>
          <input value={note} onChange={e => setNote(e.target.value)} />
        </div>
        <div>
          <button onClick={submitNote}>Add Note</button>
        </div>
        <div>
          <Notes notes={notes} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;