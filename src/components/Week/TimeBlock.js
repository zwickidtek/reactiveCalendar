import Popup from 'reactjs-popup'


const TimeBlock = () => {
    return(
        <Popup trigger={<div class="col-3"></div>} 
            modal>
            <div className="modal">
            <div><h1 className="modalTitle">Add Task</h1></div>
            </div>
        </Popup>
    )
}

export default TimeBlock;