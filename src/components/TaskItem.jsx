import React from 'react'
import { useTasks } from '../context/TaskContext'

function TaskItem({ task }) {
  const { toggleTask, removeTask } = useTasks()

  return (
    <li className="bg-white p-3 rounded shadow flex justify-between items-center">
      <div>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        <span className={task.done ? 'line-through' : ''}>
          {task.title} ({task.subject}) {task.deadline && `- ${task.deadline}`}
        </span>
      </div>
      <button
        onClick={() => removeTask(task.id)}
        className="text-red-500 hover:underline ml-4"
      >
        Smazat
      </button>
    </li>
  )
}

export default TaskItem
