"use client"

import Link from 'next/link'
import {useState} from 'react'

function SideOne() {

  const [isActive, setIsActive] = useState('dashboard')

  return (
    <aside className='flex flex-col h-screen hidden sm:block w-48 shadow-lg dark:shadow-slate-800 bg-white dark:bg-[#050816]'>
    <div className="flex flex-col items-start">
         <ul className="space-y-2 text-[17px] text-gray-700 font-normal w-full">
           <Link onClick={() => setIsActive('dashboard')} href="/dashboard" className={`side_card ${isActive === 'dashboard' && "bg-[#dde8ff] text-[#4c83ea] dark:bg-[#2a3754] dark:text-[#4c83ea]"}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
           </svg>
             <div>Models</div>
           </Link>
           <Link onClick={() => setIsActive('usage')} href="/usage" className={`side_card ${isActive === 'usage' && "bg-[#dde8ff] text-[#4c83ea] dark:bg-[#2a3754] dark:text-[#4c83ea]"}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
           </svg>
             <div>Usage</div>
           </Link>
           <Link onClick={() => setIsActive('billing')} href="/billing" className={`side_card ${isActive === 'billing' && "bg-[#dde8ff] text-[#4c83ea] dark:bg-[#2a3754] dark:text-[#4c83ea]"}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
           </svg>
             <div>Billing</div>
           </Link>
           <Link onClick={() => setIsActive('bookmarks')}  href="/bookmarks" className={`side_card ${isActive === 'bookmarks' && "bg-[#dde8ff] text-[#4c83ea] dark:bg-[#2a3754] dark:text-[#4c83ea]"}`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
           </svg>
             <div>Bookmarks</div>
           </Link>
         </ul>
       </div>
    </aside>
  )
}

export default SideOne