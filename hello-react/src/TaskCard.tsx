import React from 'react'
import './TaskCard.css'

interface TaskCardProps{
  title: string,
  dueDate?:string;
  completedAtDate?:string;
  assigneeName:string;
  

}

const TaskCard=(props:TaskCardProps)=>{
  return(
    <div className="TaskItem m-4">
        <h2 className='text-xl font-bold'>{props.title}</h2>
        <p>
          {
            props.completedAtDate
            ?`Completed on: ${props.completedAtDate}`
            :`Due on: ${props.dueDate}`
          }
        </p>
        <p>Assignee: {props.assigneeName}</p>
      </div>
  )
  
}
export default TaskCard