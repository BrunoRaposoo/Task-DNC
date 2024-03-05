/* eslint-disable react/prop-types */
import './index.scss'
import { Header } from "../../components/Header/Header";
import { Message } from "../../components/Message/Message";
import { useState } from 'react';
import edit from '../../assets/edit.svg'
import remove from '../../assets/remove.svg'
import { Link } from 'react-router-dom';
import { Jobs } from '../../components/Jobs/Jobs';

export function Tasks({ data }) {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

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
                <p>{task}</p>
                <div className="btn">
                  <input type="checkbox" name="" id="" />
                  <Link to={`/edit/${task.id}`}>
                    <button>
                      <img src={edit} alt="Editar" />
                    </button>
                  </Link>
                  <Link to={`/delete/${task.id}`}>
                    <button>
                      <img src={remove} alt="" />
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