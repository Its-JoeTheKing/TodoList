import {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [task,setTaks] = useState('');
  return (
    <div className='App'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
      <link href="https://fonts.googleapis.com/css2?family=Acme&family=Bangers&family=Bree+Serif&family=Josefin+Sans&family=Montserrat:wght@500&family=Poppins:wght@500&family=Roboto:wght@500&family=Secular+One&family=Signika+Negative&family=Staatliches&family=Teko&display=swap" rel="stylesheet"/>
      <div className='Box'>
        <h2 className='title'>Do It TodoList !!!</h2>
        <input className='inpt' name='todo' value={task} onChange={(e)=>setTaks(e.target.value)} /><button className='add'>Add +</button>
      </div>
    </div>
  );
}

export default App;
