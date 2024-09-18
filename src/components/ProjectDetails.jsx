import React from 'react'

function ProjectDetails({formData, handleInputChange}) {
  return (
    <div>
         <div className="mb-6">
          <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Short Descrption
          </label>
            <input
              type="text"
              id="shortDescription"
              name='shortDescription'
              value={formData.shortDescription}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-gray-600 rounded-md"
            />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Description
          </label>
          <textarea
            id="description"
            name='longDescription'
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="3"
            value={formData.longDescription}
            onChange={handleInputChange}
            placeholder="Add a description to encourage guests to attend to your event. Links, emojis and new lines are supported."
          ></textarea>
        </div>
    </div>
  )
}

export default ProjectDetails