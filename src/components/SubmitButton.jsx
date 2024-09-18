import React from 'react'

export default function SubmitButton({text}) {
  return (
    <button className='mt-2 rounded-lg bg-teal-500 py-4 text-lg text-white disabled:bg-teal-600/30 lg:text-xl font-semibold' type='submit'>
        {text}
    </button>
  )
}
