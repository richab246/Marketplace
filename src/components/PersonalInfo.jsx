import React from 'react'
import { useFormContext } from 'react-hook-form'

function PersonalInfo({formData, handleInputChange}) {

  const {register} = useFormContext()

  return (
    <div>
        <div className="mb-6">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
            <input
              type="text"
              id="name"
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              placeholder='John Smith'
              {...register('name', {
                required: {
                  value: true,
                  message: 'required',
                },
              })}
              className="w-full p-2 border border-gray-300 text-gray-600 rounded-md"
            />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
              type="email"
              id="email"
              required
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-gray-600 rounded-md"
            />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone Number
          </label>
          <input
              type="number"
              id="phone"
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-gray-600 rounded-md"
            />
        </div>
       
    </div>
  )
}

export default PersonalInfo