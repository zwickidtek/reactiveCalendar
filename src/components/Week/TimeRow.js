import TimeBlock from './TimeBlock.js'

const TimeRow = ({hour}) => {
    return(
        <div class="row">
        <div class="col-3 timeStamp">
            {hour}
        </div>
        <TimeBlock />
        <TimeBlock />
        <TimeBlock />
        <TimeBlock />
        <TimeBlock />
        <TimeBlock />
        <TimeBlock />
    </div>
    )
}

export default TimeRow;