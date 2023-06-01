import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='relative flex items-center space-x-2 w-[600px] h-16 shadow-2xl bg-white pl-6'><AiOutlineSearch  size={20}/><input placeholder='Search posts, tags and authors' className='w-[500px] h-16'  /></div>
  )
}

export default Search