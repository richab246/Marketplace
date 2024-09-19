"use client"

import { createModel } from '@/lib/models';
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

function StepOneForm() {

  const [formData, setFormData] = useState({
    email: '',
    projectName: '',
    image: null,
    category: '',
    link: '',
    shortDescription: '',
    longDescription: '',
    sponsered: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0]
      }))
      }else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSponsoredChange = (e) => {
    const isSponsored = e.target.value === 'true';
    setFormData(prevData => ({
      ...prevData,
      sponsered: isSponsored
    }));
  };
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      console.log(formData)
      const res = await createModel(formData);
      if (res.error) {
        toast.error('Error creating model');
      } else {
        toast.success('Model created successfully!');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setIsLoading(false);
      setFormData({
        email: '',
        projectName: '',
        image: null,
        category: '',
        link: '',
        shortDescription: '',
        longDescription: '',
        sponsered: false
      })
    }
    
  }

  const onCancel = () => {
     setFormData({
      email: '',
      projectName: '',
      image: null,
      category: '',
      link: '',
      shortDescription: '',
      longDescription: '',
      sponsered: false
    })
  }

  return (
    <div className='mt-8'>
        <h1 className='text-3xl font-semibold text-center dark:text-white/75'>Submit AI Tool</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='w-5/6 md:w-3/4 mx-auto mb-10 flex rounded-lg bg-white dark:bg-[#1a202a] dark:border dark:border-slate-700 shadow-md flex-col gap-4 mt-8'>
              <div className='w-full p-5 bg-gray-100 dark:bg-gray-800 rounded-t-lg'>
               <h3 className='font-semibold text-md md:text-lg dark:text-white'>Project Information</h3>
              </div>
            <div className='px-10 pb-10 flex flex-col gap-5'>
                <div className='w-full flex flex-col gap-2'>
                 <label className='input_label'>Email</label>
                 <input
                  type='text'
                  className='input_link'
                  placeholder='example@gmail.com'
                  name='email'
                  value={formData.email}
                  {...register("email", { required: true, onChange: handleInputChange })}
                 />
                {errors.email && <span className='text-xs text-red-600'>This field is required</span>}
                </div>
                <div className='w-full flex flex-col gap-2'>
                 <label className='input_label'>Project Name</label>
                 <input
                  type='text'
                  className='input_link'
                  placeholder='eg. chatgpt'
                  value={formData.projectName}
                  {...register("projectName", { required: true, onChange: handleInputChange })}
                 />
                {errors.projectName && <span className='text-xs text-red-600'>This field is required</span>}
                </div>
                <div className='w-full flex flex-col gap-2'>
                <label className='input_label'>Image</label>
                <input
                  type='file'
                  className='input_link'
                  disabled
                />
                </div>
                <div className="w-full flex flex-col gap-2">
                 <label className='input_label'>Category</label>
                 <input
                 type='text'
                 className='input_link'
                 placeholder='Machine learning '
                 value={formData.category}
                 {...register("category", { required: true, onChange: handleInputChange })}
                 />
                </div>
               <div className='w-full flex flex-col gap-2'>
                <label className='input_label'>Link</label>
                <input
                 type='text'
                 pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                 className='input_link'
                 placeholder='https://example.com'
                 value={formData.link}
                 {...register("link", { required: true, onChange: handleInputChange })}
                 />
                {errors.link && <span className='text-xs text-red-600'>This field is required</span>}
            </div>
            <div className='w-full flex flex-col gap-2'>
            <label className='input_label'>Pricing Type</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sponsered"
                value="false"
                checked={!formData.sponsered}
                onChange={handleSponsoredChange}
                className="form-radio text-teal-600"
              />
                <span className="input_label">Free</span>
              </label>
              <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="sponsered"
                value="true"
                checked={formData.sponsered}
                onChange={handleSponsoredChange}
                className="form-radio text-teal-600"
              />
                <span className="input_label">Paid</span>
              </label>
            </div>
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label className='input_label'>Short Description</label>
                <input
                 type='text'
                 className='input_link'
                 placeholder='100 words'
                 value={formData.shortDescription}
                 {...register("shortDescription", { onChange: handleInputChange })} 
                />
            </div>
            <div className="w-full flex flex-col gap-2">
             <label className='input_label'>Description</label>
             <textarea
              className="input_link"
              rows="3"
              placeholder="Add a description."
              {...register("longDescription", { required: true, onChange: handleInputChange })}  >
             </textarea>
                {errors.description && <span className='text-xs text-red-600'>This field is required</span>}
            </div>
            <div className='flex gap-4 self-end mt-4'>
            <button 
             className='border border-teal-600 hover:bg-teal-600 hover:text-white dark:text-white font-medium w-fit px-4 py-2 rounded-md' 
             type='button'
             onClick={onCancel}
             >
            Cancel
         </button>
         <button className='text-white bg-teal-600 hover:bg-teal-800 font-medium w-fit px-4 py-2 rounded-md' type='submit' disabled={isLoading}>
            {isLoading? (
              <div className='spinner mx-5 my-1'>
              </div>
            ): 'Submit'}
         </button>
         </div>
        </div>
        </form>
    </div>
  )
}

export default StepOneForm