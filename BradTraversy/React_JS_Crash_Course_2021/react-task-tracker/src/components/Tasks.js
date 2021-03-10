const newTask =   {
    id: 4,
    text: 'Snooping',
    day: 'Feb 10th at 00:30am',
    reminder: false,
  }


const Tasks = ({ tasks }) => {
  return (
    <>
     {tasks.map(task => <h3 key={task.id}>{task.text}</h3>)}
    </>
  )
}

export default Tasks
