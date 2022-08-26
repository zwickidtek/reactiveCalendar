import DayLabelRow from './DayLabelRow'
import TimeRow from './TimeRow'
const WeekTimeline = () => {
    let hours = []

    for(let i=8; i < 24; i++)
{
    if(i < 13){
        let str = String(i)
        str+=' am'
        hours.push(str)
    }
    else{
        let str=String(i%12)
        str+= ' pm'
        hours.push(str)
    }
}
    let list = hours.map(hr => <TimeRow hour={hr}/>)
    return(
<div className="timelineContainer">
    <DayLabelRow />
    {list}
        </div>
    )
}

export default WeekTimeline;