import React from 'react';
import { GrClose } from 'react-icons/gr';

const Signin = ({ onClose, onSubscribeClick }) => {

    const handleSubscribeClick = () =>
    {
        onSubscribeClick()
    }
  return (
    <div className=' shadow-2xl w-[500px] h-[300px] rounded-xl flex flex-col px-10 py-12 justify-between bg-white '>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-bold'>Sign in</h1>
        <GrClose
          size={24}
          className='cursor-pointer'
          style={{ opacity: 0.2 }}
          onMouseEnter={(e) => { e.target.style.opacity = 0.5 }}
          onMouseLeave={(e) => { e.target.style.opacity = 0.2 }}
          onClick={onClose}
        />
      </div>
      <div>
        <div className='text-left'>Email</div>
        <input
          type='email'
          placeholder='jamie@example.com'
          className='w-[430px] h-10 pl-2 border-gray-200 border-[1px] rounded-md'
        />
      </div>
      <button className='bg-sky-400 text-white w-[430px] h-10 rounded-lg'>Continue</button>
      <div className='flex'>
        Don't have an account? <div className='text-sky-500 pl-1 cursor-pointer' onClick={handleSubscribeClick}>Sign up</div>
      </div>
    </div>
  );
};

export default Signin;
