import React from 'react'

function ProjectInfo({formData, handleInputChange}) {
  return (
    <div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Name</label>
              <input
              type="text"
              name='projectName'
              placeholder='John Smith'
              value={formData.projectName}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 text-gray-600 rounded-md"
            />
            </div>

            <div className="mb-6">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              name='category'
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md appearance-none text-gray-600"
            >
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
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Link</label>
                  <input
                    type="text"
                    name='link'
                    placeholder="Link to the meeting"
                    value={formData.link}
                    onChange={handleInputChange}
                    pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
            </div>
    </div>
  )
}

export default ProjectInfo