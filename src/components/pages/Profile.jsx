import React,{useContext} from 'react'
import { Changeprofile } from './Changeprofile'
import { Appcontext } from '../../App'



export const Profile = (props) => {
    const {context}=useContext(Appcontext);
  return (
    <div className='w-full h-screen flex  md:flex-col pt-5 items-center gap-5 '>
        
        <div className='flex justify-between w-[70%]'>
            <h1>User name is set to {props.username}</h1> 
            <h1>User name Set using Contaxt hook {context}</h1>
        </div>
       
        <Changeprofile setUsername={props.setUsername } />
    </div>

    
  )
}
