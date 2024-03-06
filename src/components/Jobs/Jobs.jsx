/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { Pencil, Trash } from "@phosphor-icons/react";


/* eslint-disable react/prop-types */
export function Jobs({ data }) {
  const [isDone, setIsDone] = useState(false)

  const taskDone = () => {
    setIsDone(!isDone)
  }
  
  return (
    <div key={data.id} className="tasks__item">
    <p className={isDone ? "SelectedTaskText" : "Tasktext"}>{data.task}</p>
    <div className="btn">
      <button className={isDone ? "checked" : "check" } onClick={taskDone}> {isDone ? <Check size={18} weight="bold" color="#F9D1D1"/> : null }  </button>
      <Link to={`/edit/${data.id}`}>
        <button className='editTask'>
          <Pencil size={30} />
        </button>
      </Link>
      <Link to={`/delete/${data.id}`}>
        <button className='deleteTask'>
          <Trash size={30} />
        </button>
      </Link>
    </div>
    </div>
  )
}