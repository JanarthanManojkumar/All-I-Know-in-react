import {React,useState} from 'react'

export const State = () => {

    const[todolist,setTodolist] =useState([])
    const [newTask,setNewTask]=useState('')
    

    const handleChange=(event)=>{

        setNewTask(event.target.value)

    }

    const addTask=()=>{

        const task={
            id: todolist.length===0 ? 1 :todolist[todolist.length-1].id+1,
            taskName:newTask,
            complete:false
        }

        setTodolist([...todolist,task])
        setNewTask('')
    }

    const deleteClass = (id) => {
        return setTodolist(todolist.filter((task) => {
          return id !== task.id;
        }));
      };

      const completeTask = (id) => {
        setTodolist(
          todolist.map((task) => {
            return task.id === id ? { ...task, complete: !task.complete } : task;
          })
        );
      };
      
      

  return (
    <div className='bg-[#F1DEC9] max-w-[1240px] h-screen p-5'>
      <div className='flex flex-col justify-start items-center mx-auto p-5 gap-4 h-full bg-[#A4907C]'>
            <h1 className='text-white uppercase'>
                States
            </h1>

        <div className='flex gap-4'>

            <input type="text"  className='bg-white border-none w-[300px] ' onChange={handleChange} />
            <button onClick={addTask} className='bg-orange-300 px-5 py-1'>Add</button>
            
        </div>

        <div className='flex flex-col gap-4 '>
            {todolist.map((task ,key)=>{
                return(
                    <div className={`flex flex-col justify-center items-center p-2 ${task.complete===true ? 'bg-green-300' : 'bg-white' } `}>
                        <h1 className='mb-2' key={key}>{task.taskName}</h1>
                            <div className='flex gap-4'>
                                <button className='bg-red-600 py-2 px-2' onClick={()=>{deleteClass(task.id)}}>Delete</button>
                                <button className={`bg-green-600 py-2 px-2`} onClick={()=>{completeTask(task.id)}}>{task.complete===true ? 'Not-Complete' : 'Complete'}</button>
                                <button className='bg-blue-600 py-2 px-2' >Edit</button>
                            </div>
                    </div>
                    
                ); 
                
            })}
        </div>

        </div>
       
    </div>
  )
}
