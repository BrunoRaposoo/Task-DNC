/* eslint-disable react/prop-types */
import './index.scss'
import { Header } from "../../components/Header/Header";
import { Message } from "../../components/Message/Message";
import { Link, useParams } from 'react-router-dom';

export function Edit({ data }) {
  const { editId } = useParams()
  const selectedTask = data.find((job) => job.id == editId)

  return (
    <div className="edit">
    <Header />
    <Message />
    <div className="edit__container">
      <p className="edit__phrase-one">Deseja editar esse item?</p>
      <p className="edit__phrase-two">{selectedTask.task}</p>
      <div className="edit__btns">
        <Link to={`/`}>
          <button className="edit__no-btn">Não</button>
        </Link>
        <button className="edit__yes-btn" >Sim</button>
      </div>
    </div>
  </div>

  )
}