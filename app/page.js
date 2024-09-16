"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }
  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Avilable</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl '>{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i)
            }
            }
            className='bg-slate-500 text-white px-2 py-3 rounded'>
            Delete
          </button>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className='bg-black text-white text-3xl p-5 text-center font-bold'>My Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' className=' m-8 
          border-zinc-800 border-2  px-4 py-2 text-xl' placeholder='Enter title here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />

        <input type='text' className=' m-8 
          border-zinc-800 border-2  px-4 py-2 text-xl' placeholder='Enter discription here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />


        <button className='border-2 bg-gray-600 font-bold p-2 rounded text-white'>Add task</button>
      </form>
      <hr />
      <div className='px-10 py-5 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
