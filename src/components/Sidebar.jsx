import React from 'react'

function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className='px-8 w-1/3 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>Project Management</h2>
      <div>
        <button className='add-button' onClick={onStartAddProject}>
          + Add Project
        </button>
      </div>
      <ul className='mt-8'>
        {projects.map(project => {
          let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-2 hover:text-stone-50 hover:bg-stone-800'

          if (project.id  === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-300'
          }
          return (
            <li key={project.id}>
              <button onClick={() => onSelectProject(project.id)} className={cssClasses} >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar