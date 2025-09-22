import React from 'react'
import { TaskProvider } from './context/TaskContext'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">🎓 Student Planner</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  )
}

export default App
