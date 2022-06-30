import logo from './logo.svg';
import './App.scss';
import  "./index.scss" ;
import Header from './components/Header';
import Tasks from './components/Tasks';
import footer from './components/footer';
import AddTask from './components/AddTask';
import about from './components/about';
import {useState, useEffect} from 'react'




function App() {
  const [showForm, setShowForm]= useState(false)
  const [tasks,setTasks]=useState([])
  

  useEffect(() => {
    const getTasks=  async () => {
        const tasksFromServer= await fetchTasks()
        console.log(tasksFromServer)
        setTasks (tasksFromServer)
    }
    getTasks()
  }, [])
  
// fetch tasks
const fetchTasks= async () => {
  const res= await fetch('http://localhost:5000/tasks/')
  const data= await res.json()
  return data
} 

const fetchTask= async (id) => {
  const res= await fetch(`http://localhost:5000/tasks/${id}`)
  const data= await res.json()
  return data
} 

//Add tasks
const addTask = async (task) => {
  const res= await fetch (`http://localhost:5000/tasks`,
  {method: "POST",
headers: {"Content-type":"application/json"},
body: JSON.stringify(task)},
  )  

  const data= await res.json()
    setTasks([...tasks, data])
  
}

//delete tasks
const deleteTasks=  async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
    {method: 'DELETE'}
    )
    setTasks(tasks.filter (task => task.id!==id))
}

//set reminder
const setReminder= async (id) => {
    const tasktoToggle= await fetchTask(id)
    const updatedTask= {...tasktoToggle, reminder:!tasktoToggle.reminder}
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task))
}

  return (
    
    <div className='container'>
      <Header onBtnClick={()=> setShowForm (!showForm)} showAdd={showForm}/>
      {showForm && <AddTask onAdd= {addTask}/>}
      {tasks.length>0 ? (<Tasks tasks={tasks} onDelete= {deleteTasks} onToggle={setReminder}/>)  : ("You have no tasks today!🙌")}
      <footer></footer>
    </div>
  );
}

export default App;
