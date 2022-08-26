import './static/App.css'
import AddTask from './components/Tasks/addTask'
import TaskCount from './components/Tasks/taskCount'
import TaskList from './components/Tasks/taskList'
import React, { useState, useEffect } from "react"
import axios from 'axios'
import Tabs from './components/Tabs'
import Calendar from 'react-calendar'
import WeekTimeline from './components/Week/weekTimeline'
import './static/Calendar.css';

const App = () => 
{
  const [todos, setTodos] = useState([])
  const [date, setDate] = useState(new Date());

  console.log(todos)
  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then(response => {
        setTodos(response.data)
      })
  }, [])
  return(
  <div>
    

    <div>
      <Tabs>
        <div label="To-Do">
        <div className="container">
          <div className="todo">
            <AddTask actionName={setTodos} stateVar={todos}/>
            <TaskList todos={todos} ActionName={setTodos} />
          <div className="tasks-statis">
            <TaskCount count={todos.length} />
          </div>
        </div>
        </div>
        </div>
        <div label="Week">
          <WeekTimeline />
        </div>
        <div label="Month">
        <div className='calendar-container'>
            <Calendar onChange={setDate} value={date} />
        </div>
        </div>
      </Tabs>
    </div>
    
    
  </div>



)}

export default App