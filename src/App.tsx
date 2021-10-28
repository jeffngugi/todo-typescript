import React, {FC, useState} from 'react'
import './App.css'


const App:FC = () => {

  const [task, setTask] = useState<String>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodoList] = useState([])

  return (
    <div className="App">
        <div className='header'>
          <div className='inputContainer'>

          <input type='text' placeholder="Task ...." />
          <input type='number' placeholder="Deadline in days" />
          </div>
          <button>Add Task</button>
        </div>
        <div className='todoList'></div>
    </div>
  )
}

export default App
