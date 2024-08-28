"use client"

import {useState, useEffect} from 'react'

const SearchBar = () => {

  const [searchText, isSearchText] = useState('');

  const handleSearchChange = (e) => {

  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
      <div className='search_input flex-between'>
        <input 
         type='text'
         placeholder='Find AI tools using AI'
         value={searchText}
         onChange={handleSearchChange}
         required
         className='search peer'
        />
        <button className='input_btn'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="sm:size-6 size-4 stroke-white">
           <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
          <span className='sm:block hidden'>Search</span>
        </button>
       </div>
      </form>
    </section>
  )
}

export default SearchBar;
