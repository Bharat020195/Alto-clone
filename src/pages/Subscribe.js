import React from 'react';
import { GrClose } from 'react-icons/gr';

const Subscribe = ({ onClose, onSigninClick }) => {

  const handleSignInClick = () => {
    onSigninClick();
  };
  return (
    <div className='absolute shadow-2xl w-[500px] h-[400px] rounded-xl flex flex-col px-10 py-12 justify-between bg-white'>
      <div className='flex justify-between'>
        <div></div>
        <div className='text-3xl font-bold text-center'>Alto</div>
        <GrClose
          size={24}
          className='cursor-pointer'
          style={{ opacity: 0.2 }}
          onMouseEnter={(e) => {
            e.target.style.opacity = 0.5;
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = 0.2;
          }}
          onClick={onClose}
        />
      </div>

      <div>
        <div className='text-sm'>Name</div>
        <input type='text' placeholder='Jamie Larson' className='w-[430px] h-10 pl-2 border-gray-200 border-[1px] rounded-md' />
      </div>
      <div>
        <div className='text-sm'>Email</div>
        <input type='email' placeholder='jamie@example.com' className='w-[430px] h-10 pl-2 border-gray-200 border-[1px] rounded-md' />
      </div>
      <button className='bg-sky-400 text-white w-[430px] h-10 rounded-lg'>Sign up</button>
      <div className='flex'>
        Already a member?  <div onClick={handleSignInClick} className='text-sky-500 pl-1 cursor-pointer'> Sign in</div>
      </div>
    </div>
  );
};

export default Subscribe;
