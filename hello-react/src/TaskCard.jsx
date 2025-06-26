import './TaskCard.css'

const TaskCard=(props)=>{
  return(
    <div className="TaskItem m-4">
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <p>
          {
            props.status ==='Done'
            ?`Completed On: ${props.completedAtDate}`
            :`Due on: ${props.dueDate}`
          }
        </p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
  )
  
}
export default TaskCard