"use client"

import Link from 'next/link'
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import { sidebarLists } from '@/constants';
import { LoginLink, RegisterLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

const containerVariant = {
    close: {
      x: '-100%',
      transition: {
        type: 'spring',
        damping: 15,
        duration: 0.5
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 15,
        duration: 0.5
      }
    }
}

const Sidebar = ({isOpen, toggleSidebar, isAuthenticated}) => {

  const containerControls = useAnimationControls();

  useEffect(() => {
    if(isOpen){
     containerControls.start("open")
    }else{
      containerControls.start("close")
    }
  }, [isOpen])


  return ( 
    <motion.div 
      className={`fixed top-0 left-0 h-screen sm:w-80 ${isAuthenticated ? "w-40" : "w-70"} dark:bg-[#050816] bg-white shadow-lg z-50`}
      animate={isOpen ? 'open' : 'close'}
      initial='close'
      variants={containerVariant}
    >
      <div className='p-4 flex flex-row w-full justify-between'>
        <div className='w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-700 rounded-full'></div>
        <div className='test-md font-bold dark:text-white text-black hidden sm:block'>Awesome AI tools</div>
        <button onClick={toggleSidebar} className='top-4 right-4 focus:outline-none'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-7 text-gray-200 hover:text-gray-400 font-bold transition-colors duration-200">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
        </button>
        </div>
        <div className="flex-grow overflow-y-auto" style={{ maxHeight: 'calc(100vh - 64px)' }}>
                  <div className='flex items-center gap-2 block border-gray-600 border-y py-3 px-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 dark:text-gray-200">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                  </svg>
                  <Link className='sidebar' href='/'>Home</Link>
                  </div>
                  <div className='border-b border-gray-600 py-2 flex flex-col gap-1 mb-2 sm:block hidden'>
                   <LoginLink className={`items-center gap-2 mb-2 sm:flex hidden px-4`}>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-gray-200">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                   </svg>
                   <span className='sidebar'>Login</span>
                   </LoginLink>
                   <RegisterLink className='items-center gap-2 mb-2 sm:flex hidden px-4'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 dark:text-gray-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                   </svg>
                   <span className='sidebar'>Sign up</span>
                   </RegisterLink>
                  </div>
                    {sidebarLists.map((item, index) => (
                        <Link key={index} href={item.path} className={`py-2 px-4 sidebar ${isAuthenticated ? "sm:block hidden" : "block"}`}>
                            {item.name}
                        </Link>
                    ))}
                    { isAuthenticated &&
                    <div className='sm:hidden block'>
                    <Link href="/dashboard" className={`side_card`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
           </svg>
             <div>Models</div>
           </Link>
           <Link href="/usage" className={`side_card`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
           </svg>
             <div>Usage</div>
           </Link>
           <Link href="/billing" className={`side_card`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
           </svg>
             <div>Billing</div>
           </Link>
           <Link href="/bookmarks" className={`side_card`}>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
           </svg>
             <div>Bookmarks</div>
           </Link>
                    </div>
}
            </div>
        </motion.div>
  )
}

export default Sidebar
