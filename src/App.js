// query database for current day's to-do items
import './static/App.css'
import AddTask from './components/addTask'
import TaskCount from './components/taskCount'
import TaskList from './components/taskList'
import React, { useState, useEffect } from "react"
import axios from 'axios'
import Tabs from './components/Tabs'
import Calendar from 'react-calendar'
import './static/Calendar.css';

const App = () => 
{
  const [todos, setTodos] = useState([])
  const [date, setDate] = useState(new Date());

  console.log(todos)
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/todos')
      .then(response => {
        console.log('promise fulfilled')
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