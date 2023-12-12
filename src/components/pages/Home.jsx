import React from 'react'
import { useContext } from 'react'
import { Appcontext } from '../../App'

export const Home = (props) => {
    const {context}=useContext(Appcontext);
  return (
    <div className='w-full h-screen text-gray-200'>
        <div className='w-full h-screen flex flex-col justify-start p-7 items-center gap-7'>
            <h1>This is the home of the user Changed and fetched using prop drilling {props.username}  </h1>
            <h1>This is the home of the user Changed and fetched using Context hook {context} </h1>
        </div>
      
    </div>
  )
}
