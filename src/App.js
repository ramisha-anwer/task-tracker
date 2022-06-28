import logo from './logo.svg';
import './App.scss';
import  "./index.scss" ;
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'



function App() {
  const [tasks,setTasks]=useState([
    {
        id: 1,
        text:" Doctors Appointment",
        day:"Feb 5th ",
        time: "2:30 pm",
        reminder: "true"
    }
  ])

//delete tasks
const deleteTasks= (id) => {
    setTasks(tasks.filter (task => task.id!==id))
}

//set reminder
const setReminder= (id) => {
  setTasks(tasks.map((task=> task.id==id ? {...task, reminder:!task.reminder} : task)))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete= {deleteTasks} onToggle={setReminder}/>)  : ("You have no tasks today!🙌")}
    </div>
  );
}

export default App;
