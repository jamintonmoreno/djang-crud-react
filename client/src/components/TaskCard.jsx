import React from 'react'
import { useNavigate } from 'react-router-dom'

export function TaskCard({ task }) {
  return (
    <div onClick={() => {
      navigate(`/tasks/${task.id}`);
    }}
    >
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  )
}