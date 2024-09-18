"use client"

import { createModel } from '@/lib/models';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

function StepOneForm() {

  const [formData, setFormData] = useState({
    email: '',
    projectName: '',
    image: null,
    category: '',
    link: '',
    shortDescription: '',
    longDescription: ''
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async () => {
    const res = await createModel(formData)
    console.log('Data', res);
  }

  return (
    <div className='mt-8'>
        <h1 className='text-3xl font-semibold text-center'>Submit AI Tool</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-5/6 md:w-3/4 mx-auto mb-10 flex rounded-lg bg-white dark:bg-[#151030] shadow-md flex-col gap-4 mt-8'>
              <div className='w-full p-5 bg-gray-100 dark:bg-gray-800 rounded-t-lg'>
               <h3 className='font-semibold text-md md:text-lg dark:text-white'>Project Information</h3>
              </div>
            <div className='px-10 pb-10 flex flex-col gap-5'>
                <div className='w-full flex flex-col gap-2'>
                 <label className='text-sm font-medium md:text-base dark:text-gray-100'>Email</label>
                 <input
                  type='text'
                  className='w-full flex p-3 font-medium text-gray-700 border rounded-md border-slate-300 placeholder:opacity-60 placeholder:font-normal'
                  placeholder='example@gmail.com'
                  name='email'
                  value={formData.email}
                  {...register("email", { required: true, onChange: handleInputChange })}
                 />
                {errors.email && <span className='text-xs text-red-600'>This field is required</span>}
                </div>
                <div className='w-full flex flex-col gap-2'>
                 <label className='text-sm font-medium md:text-base dark:text-gray-100'>Project Name</label>
                 <input
                  type='text'
                  className='w-full flex p-3 font-medium border rounded-md border-slate-300 placeholder:opacity-60 placeholder:font-normal'
                  placeholder='eg. chatgpt'
                  value={formData.projectName}
                  {...register("projectName", { required: true, onChange: handleInputChange })}
                 />
                {errors.projectName && <span className='text-xs text-red-600'>This field is required</span>}
                </div>
                <div className='w-full flex flex-col gap-2'>
                <label className='text-sm font-medium md:text-base dark:text-gray-100'>Image</label>
                <input
                  type='file'
                  className='w-full flex p-3 font-medium border rounded-md border-slate-300 placeholder:opacity-60 placeholder:font-normal'
                  disabled
                />
                </div>
                <div className="w-full flex flex-col gap-2">
                 <label className='text-sm font-medium md:text-base dark:text-gray-100'>Category</label>
                 <div className="relative">
                   <select
                    id="category"
                    name='category'
                    className="w-full p-3 border font-medium border-slate-300 rounded-md appearance-none placeholder:opacity-60 placeholder:font-normal">
                     <option value="" disabled>Select a category</option>
                     <option value="Machine">Category 1</option>
                     <option value="Deep">Category 2</option>
                    </select>
                  <div className='absolute right-3 top-3'>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 stroke-gray-400">
                    <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                   </svg>
                  </div>
                 </div>
                </div>
        <div className='w-full flex flex-col gap-2'>
                <label className='text-sm font-medium md:text-base dark:text-gray-100'>Link</label>
                <input
                 type='text'
                 pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                 className='w-full flex p-3 font-medium border rounded-md border-slate-300 placeholder:opacity-60 placeholder:font-normal'
                 placeholder='www.google.com'
                 value={formData.link}
                 {...register("link", { required: true, onChange: handleInputChange })}
                 />
                {errors.link && <span className='text-xs text-red-600'>This field is required</span>}
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='text-sm font-medium md:text-base dark:text-gray-100'>Short Description</label>
                <input
                 type='text'
                 className='w-full flex p-3 font-medium border rounded-md border-slate-300 placeholder:opacity-60 placeholder:font-normal'
                 placeholder='100 words'
                 value={formData.shortDescription}
                 {...register("shortDescription", { onChange: handleInputChange })} 
                />
            </div>
            <div className="w-full flex flex-col gap-2">
             <label className='text-sm font-medium md:text-base dark:text-gray-100'>Description</label>
             <textarea
              id="description"
              name='longDescription'
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
              placeholder="Add a description to encourage guests to attend to your event. Links, emojis and new lines are supported."
              {...register("description", { required: true })}  >
             </textarea>
                {errors.description && <span className='text-xs text-red-600'>This field is required</span>}
            </div>
            <div className='flex gap-4 self-end mt-4'>
            <button className='border border-teal-600 font-medium w-fit px-4 py-2 rounded-md' type='button'>
            Cancel
         </button>
         <button className='text-white bg-teal-600 font-medium w-fit px-4 py-2 rounded-md' type='submit'>
            Submit
         </button>
         </div>
        </div>
        </form>
    </div>
  )
}

export default StepOneForm