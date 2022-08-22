import React, { useState } from 'react'
import axios from 'axios'
import TaskLine from './taskLine'

const TaskList = ({todos, ActionName}) => { 
  let list = todos.map(todo => <TaskLine props={todo} actionName={ActionName} stateVar={todos} key={todo.id}/>)
      return(
        <div className="list-tasks">
          {list}
        </div>
    )
}
export default TaskList
