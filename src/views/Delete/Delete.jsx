/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Message } from "../../components/Message/Message";
import './index.scss'

export function Delete({data}) {
  const { deleteId } = useParams()
  const selectedTask = data.find((job) => job.id == deleteId)
  return (
    <div className="delete">
      <Header />  
      <Message />
      <div className="delete__container">
        <p className="delete__phrase-one">Deseja excluir esse item?</p>
        <p className="delete__phrase-two">{selectedTask.task}</p>
        <div className="delete__btns">
          <Link to={`/`}>
            <button className="delete__no-btn">Não</button>
          </Link>
          <button className="delete__yes-btn">Sim</button>
        </div>
      </div>
    </div>
  )
}