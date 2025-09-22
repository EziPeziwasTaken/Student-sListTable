import React from 'react'
import { useTasks } from '../context/TaskContext'
import TaskItem from './TaskItem'

function TaskList() {
  const { tasks } = useTasks()

  if (tasks.length === 0) return <p className="text-center">Žádné úkoly 🙂</p>

  return (
    <ul className="space-y-2">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
