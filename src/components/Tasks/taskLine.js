import axios from 'axios'
import { FaCog } from "react-icons/fa"
import Popup from 'reactjs-popup'
import {useState} from 'react'



const TaskLine = ({props, actionName}) => {
    let [changeInput, setChangeInput ] = useState(props.content)

    const handleChange = e => {
        setChangeInput(e.target.value)
    }



//     const handleSubmit = () => {
//     const todoObject = {
//     content: input,
//     important: Math.random() < 0.5}          
//     axios    
//     .post('http://localhost:3001/todos', todoObject)    
//     .then(response => {  
//         actionName(stateVar.concat(response.data))
//             })
//     setInput("")
// }




    const refreshList = () => {
      axios
        .get('http://localhost:3001/todos')
        .then(response => {
        actionName(response.data)
      })
    }
    const finishTask = () => {
        axios
        .delete('http://localhost:3001/todos/'+props.id)
        .then(response => {  
          refreshList()
        })
      }


return(<div className="task" key={props.id}>
                                  <p>{props.content}</p>
                                <div className="actions">
                                  <i className="finishBtn" onClick={finishTask}>✔️</i>
                                  <Popup trigger={<i className="changeBtn"> <FaCog className="spinner" /></i>} 
                                  modal>
                                    <div className="modal">
                                    <div className="modal__title"><input type="text" className="addTask" value={changeInput} onChange={handleChange}/></div>
                                    <div>Remind?</div>
                                    <div>Reoccuring?</div>
                                    </div>
                                  </Popup>
                                  
                                </div></div>
)
}

export default TaskLine