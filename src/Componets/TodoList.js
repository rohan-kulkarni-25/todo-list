import React from 'react';
import { useState } from 'react/cjs/react.development';
import Todo from './Todo';
import TodoForm from './TodoForm'

export default function TodoList() {


  // State Array which hold all TODOS
  const [todos, setTodos] = useState([]);


  // Add todo to list
  const addTask = task => {
    if (!task.text) {
      return
    }
    const newTodos = [task, ...todos];
    setTodos(newTodos);
  }

  // Remove todo from list
  const removeTask = id => {
    let updatedTasks = [...todos].filter(task => task.id !== id)
    setTodos(updatedTasks)
  }

  // Task is completed
  const completeTask = id => {
    let updatedTasks = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    })
    setTodos(updatedTasks)

  }


  return <div>
    <TodoForm addTask={addTask}></TodoForm>
    <Todo todos={todos} completeTask={completeTask} removeTask={removeTask} ></Todo>
  </div>;
}
