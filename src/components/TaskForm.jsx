import React, { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskForm() {
  const { addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [subject, setSubject] = useState('')
  const [deadline, setDeadline] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask({ id: Date.now(), title, subject, deadline, done: false })
    setTitle('')
    setSubject('')
    setDeadline('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
      <input
        className="border p-2 rounded flex-1"
        type="text"
        placeholder="Úkol..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="text"
        placeholder="Předmět"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Přidat</button>
    </form>
  )
}

export default TaskForm
