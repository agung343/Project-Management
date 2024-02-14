import React from 'react'
import noProjectImg from "../assets/no-projects.png"

function NoProject({onStartAddProject}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImg} alt='no-project' className='w-16 h-16 object-contain mx-auto' />
        <h2 className='heading'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or Get started the new one</p>
        <p className='mt-8'>
            <button className='add-button' onClick={onStartAddProject}>
                Create New Project
            </button>
        </p>
    </div>
  )
}

export default NoProject