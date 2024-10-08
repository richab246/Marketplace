import React from 'react'
import { items } from '@/constants'
import prisma from '@/lib/prismadb';

async function getModel(id) {
  const model = await prisma.model.findUnique({
    where: {
      id: id,
    },
  })
  return model;
}

async function Tools({params}) {
   const id = parseInt(params.id); 
   const model = await getModel(id)
   if (!model) {
     return <div>Item not found</div>;
   }

  return (
    <div className='flex flex-col lg:justify-center w-full lg:px-20 sm:px-0 px-10 py-4 mt-8'>
      <div className='flex md:flex-row flex-col gap-8 md:mx-20'>
        <img src={model.image} alt='itemImage' className='rounded-md md:w-1/2'/>
        <div>
            <h1 className='text-black dark:text-gray-200 font-bold md:text-3xl text-xl'>{model.title}</h1>
            <p className='mt-2 mb-4 text-gray-400'>{model.subtitle}</p>
            <button className='flex justify-center items-center gap-2 rounded-md px-2 py-2 border border-gray-500 text-sm mt-8 dark:text-gray-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 dark:text-gray-200">
             <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Reach out to us
            </button>
        </div>
      </div>
      <div className='flex flex-col md:mx-20 mt-12 mb-16'>
        <h1 className='text-black font-bold md:text-2xl text-xl dark:text-gray-200'>About Model</h1>
        <div className='border border-gray-200 dark:border-gray-400 w-full my-6'/>
        <p className='text-bold text-gray-900 font-sans text-sm md:text-base lg:text-lg tracking-normal dark:text-gray-300' style={{ whiteSpace: 'pre-line' }}>
            {model.description}
        </p>
      </div>
    </div>
  )
}

export default Tools