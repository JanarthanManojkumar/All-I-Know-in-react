import {React,useState,useContext} from 'react'
import { Appcontext } from '../../App';

export const Changeprofile = (props) => {
  const {setcontextName}=useContext(Appcontext)
  const[username,setuser]=useState('');
  return (
    <div className='flex justify-between w-[70%] text-white'>
      <div>
        <h1>Prop drilling Change</h1>

        <input className='bg-white text-black' type="text"  onChange={(event)=>{
        setuser(event.target.value);
      }}/>
      
      <button className='ml-5'  onClick={()=>{ props.setUsername(username)}}>Click</button>
      </div>

      <div>
        <h1>Context Hook Change</h1>

        <input className='bg-white text-black' type="text"  onChange={(event)=>{
        setuser(event.target.value);
      }}/>
      
      <button className='ml-5' onClick={()=>{ setcontextName(username)}}>Click</button>
      </div>

    </div>
  )
}
