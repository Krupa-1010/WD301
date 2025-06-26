import TaskCard from "./TaskCard"

function App() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold m-2">Smarter Tasks</h1>
      <p className="text-center m-4"><span className="font-bold">Project:</span>Graduation Final Year Project (Rewamp College Website)</p>
   <div className='flex'>
    <div className="m-20 w-1/2 TaskItem">
      <h1 className="text-xl text-center font-bold p-4">Pending</h1>
      <TaskCard 
      title='Build the website with static content'
      dueDate='10th April'
      assigneeName='Rohit S'
      status='Pending'/>
      <TaskCard title='Add a blog'
      dueDate='22nd March'
      assigneeName='Rohit M'
      status='Pending'/>
     
    </div>
    <div className="m-20 w-1/2 TaskItem">
      <h1  className="text-xl text-center font-bold p-4">Done</h1>
      <TaskCard title='Design the mockup'
      completedAtDate='10th April'
      assigneeName='Rohit M'
      status='Done'/>
      <TaskCard title='Get the approval from principal'
      completedAtDate='20th April'
      assigneeName='Ajay S'
      status='Done'/>
    </div>
   </div>
   </div>
  )
}

export default App
