/* eslint-disable react/prop-types */
import './index.scss'
import { Header } from "../../components/Header/Header";
import { Message } from "../../components/Message/Message";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jobs } from '../../components/Jobs/Jobs';
import { Check, Pencil, Trash } from '@phosphor-icons/react';

export function Tasks({ data }) {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [isDone, setIsDone] = useState(false)

  const handleNewTask = (event) => {
    setNewTask(event.target.value)
  }

  const addNewTask = (e) => {
    e.preventDefault()
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, newTask])
      setNewTask('')
    }
  }

  const taskDone = () => {
    setIsDone(!isDone)
  }

  return (
    <div className="tasks">
      <Header />
      <Message />
      <div className="tasks__items">
        <div className="tasks__menu">
          <p>Tarefa</p>
          <p>status</p>
          <p>Opções</p>
        </div>

        <div className="tasks__list">
          <div className="tasks__description">
            {data.map((job) => (
              <Jobs key={job.id} data={job}/>
            ))}
            
            {tasks.map((task) => (
               <div key={task.id} className="tasks__item">
                <p className={isDone ? "SelectedTaskText" : "Tasktext"}>{task}</p>
                <div className="btn">
                <button className={isDone ? "checked" : "check" } onClick={taskDone}> {isDone ? <Check size={18} weight="bold" color="#F9D1D1"/> : null }  </button>
                  <Link to={`/edit/${task.id}`}>
                    <button className='editTask'>
                      <Pencil size={30} />
                    </button>
                  </Link>
                  <Link to={`/delete/${task.id}`}>
                    <button className='deleteTask'>
                      <Trash size={30} />
                    </button>
                  </Link>
                </div>
              </div>
    
            ))}
          </div>
        </div>


        <div className="tasks__addTask">
          <form action="">
            <textarea name="" id="" cols="30" rows="10" placeholder='Nova tarefa...' value={newTask} onChange={handleNewTask}></textarea>
            <button className='btn2' onClick={addNewTask}>
              +
            </button>
          </form>
        </div>
      </div> 
    </div>
  )
}