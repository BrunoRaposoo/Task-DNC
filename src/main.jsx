import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Tasks } from './views/Task/Tasks'
import { Edit } from './views/Edit/Edit'
import { Delete } from './views/Delete/Delete'
import { TASKS_MOCK } from './mock/tasks.mock'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Tasks data={TASKS_MOCK}/>,
  },
  {
    path: '/delete/:deleteId',
    element: <Delete data={TASKS_MOCK}/>,
  },
  {
    path: '/edit/:editId',
    element: <Edit data={TASKS_MOCK}/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
