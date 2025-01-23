import React from 'react'

const AcceptTask = ({data}) => {
  console.log();
  return (   
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
        <h1 className='bg-red-800 px-3 py-1 rounded'>{data.category}</h1>
        <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
      <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
      <p className='tex-sm text-justify mt-2 '>{data.description}</p>
        <div className='flex justify-between mt-4 '>
        <button className='bg-blue-500 py-1 px-2 text-sm rounded-md'>Accept Task</button>
        </div>
    </div>
  )
}

export default AcceptTask