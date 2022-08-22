import axios from 'axios'
import { FaCog } from "react-icons/fa"
import Popup from 'reactjs-popup';

const taskLine = ({props, actionName, stateVar}) => {

    const refreshList = () => {
      axios
        .get('http://localhost:3001/todos')
        .then(response => {
        console.log('PROMISEZ?? fulfilled')
        actionName(response.data)
      })
    }
    const finishTask = () => {
        console.log(props.id);
        axios
        .delete('http://localhost:3001/todos/'+props.id)
        .then(response => {  
          console.log('hey cutie')
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
                                    <div className="modal__title"><h1>{props.content}</h1></div>
                                    <div>Remind?</div>
                                    <div>Reoccuring?</div>
                                    </div>
                                  </Popup>
                                  
                                </div></div>
)
}

export default taskLine