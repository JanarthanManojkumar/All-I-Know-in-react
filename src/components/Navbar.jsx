import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className='text-[#EBE3D5] flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#B0A695] uppercase'>All I Know in React</h1>

      <div className='md:hidden'>
        {click ? (
          <FaTimes size={20} onClick={handleClick} />
        ) : (
          <AiOutlineMenu size={20} onClick={handleClick} />
        )}
      </div>

      <ul className={`md:flex absolute md:relative md:flex-row md:items-center md:bg-transparent md:p-0 
        ${click ? 'flex flex-col items-center justify-center left-0 top-[95px] w-full h-screen bg-[#B0A695] text-[#EBE3D5] px-4 cursor-pointer' 
        : 'hidden'}`}>
        <li className='p-5'><Link to='/'>State</Link></li>
        <li className='p-5'><Link to='fetch'>FetchAPI</Link></li>
        <li className='p-5'><Link to='home'>Home</Link></li>
        <li className='p-5'><Link to='profile'>Profile</Link></li>
        <li className='p-5'><Link to="query">Query</Link></li>
        <li className='p-5'><Link to="form">Forms</Link></li>
      </ul>
    </div>
  );
};
