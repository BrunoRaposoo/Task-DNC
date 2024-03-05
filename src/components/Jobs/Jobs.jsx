/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import edit from '../../assets/edit.svg'
import remove from '../../assets/remove.svg'


/* eslint-disable react/prop-types */
export function Jobs({ data }) {
  return (
    <div key={data.id} className="tasks__item">
    <p>{data.task}</p>
    <div className="btn">
      <input type="checkbox" name="" id="" />
      <Link to={`/edit/${data.id}`}>
        <button>
          <img src={edit} alt="Editar" />
        </button>
      </Link>
      <Link to={`/delete/${data.id}`}>
        <button>
          <img src={remove} alt="" />
        </button>
      </Link>
    </div>
    </div>
  )
}