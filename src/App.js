import {useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [task,setTaks] = useState('');
  const [tasks,addTask] = useState([]);
  const Add = (tas) => {
    if (tas !== '') {
      addTask(tasks => [...tasks,tas])
      setTaks('')
    }
  }
  const Del = (i) => {
    setTaks(tasks.splice(i,1))
  }
  return (
    <div className='App'>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
      <link href="https://fonts.googleapis.com/css2?family=Acme&family=Bangers&family=Bree+Serif&family=Josefin+Sans&family=Montserrat:wght@500&family=Poppins:wght@500&family=Roboto:wght@500&family=Secular+One&family=Signika+Negative&family=Staatliches&family=Teko&display=swap" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='Box'>
        <h2 className='title'>Do It TodoList !!!</h2>
        <div style={{height: '70px'}}>
        <input className='inpt' name='todo' value={task} onChange={(e)=>setTaks(e.target.value)} /><button onClick={()=>{Add(task)}} className='add'>Add +</button>
        </div>
        {
          tasks.map((i,k)=>{
          return <div className='task'><p>{i}</p><button onClick={()=>{Del(k)}} className='fas fa-trash-alt'></button></div>
          })
        }
      </div>
    </div>
  );
}

export default App;
