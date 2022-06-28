import React from 'react'
import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'

const Task = ({task, onDelete, onToggle}) => {
  return (
      <div className={`task ${task.reminder? 'reminder': ''}`} onDoubleClick={ () => onToggle(task.id)}>
          <h3>{task.text} <FaTrash onClick ={ () => onDelete(task.id)}></FaTrash></h3>
          <p>{task.day} - {task.time} <AiFillEdit color='steelblue' scale={2} size= {20} ></AiFillEdit> </p>
          
          
      </div>
    
  )
}

export default Task