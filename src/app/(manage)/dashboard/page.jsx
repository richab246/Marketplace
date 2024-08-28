

function Dashboard() {
    return (
        <div className='bg-white dark:bg-[#151030] rounded-xl mx-auto shadow-2xl w-full max-w-[400px] sm:max-w-[600px] px-10 py-8 flex flex-col gap-2 border border-gray-100 dark:border-white/[0.2]'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 stroke-[#4c83ea] bg-[#dde8ff] rounded-full px-2 py-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
         </svg>
         <h1 className='text-black dark:text-white font-bold text-2xl font-inter mt-6'>You haven't subscribed to any models</h1>
         <p className='text-gray-600 dark:text-gray-400 text-sm'>Explore a wide range of models and subscribe to unlock their full potential. Gain access to cutting-edge technologies tailored to your specific needs.</p>
         <button className='self-start bg-[#4c83ea] text-white font-bold px-4 py-2 rounded-md mt-6'>Explore models</button>
      </div>
    )
  }
  
  export default Dashboard