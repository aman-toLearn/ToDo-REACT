"use client"
import React, { useState } from 'react';

const page = () => {

  //react ke andar variables bnane ka kaam hota hai useState ka 
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  //title + desc ek task rhega uske liye 
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {

    //add task pe click krte hi page refresh na hoo issliye 
    e.preventDefault()
    // console.log(title)
    // console.log(desc)

    setMainTask([...mainTask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(mainTask)


  }


   //to delete 

  const deleteHandler = (i)=>{
     
let copyTask = [...mainTask]
// delete / htane ke liye 
copyTask.splice(i,1)

//
setMainTask(copyTask)

  }

  //to show 
  let renderTask = <h2>No Task Available </h2>

  if (mainTask.length > 0) {

    renderTask = mainTask.map((t, i) => {
      return (

        <li key={i} className=' flex items-center justify-between mb-8'>

          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-md'>{t.desc}</h6>
          </div>

          <button
            onClick={()=>{
              deleteHandler(i)
            }}

            className='bg-[#ea1441] px-4 py-2 rounded font-bold '>Delete </button>
        </li>

      )
    })
  }

 





  return (
    < >
      <h1 className='bg-[#064058] text-white
        p-5 text-5xl font-bold text-center mt-8 '>Aman's ToDo List</h1>

      <form className='flex justify-center' onSubmit={submitHandler}>




        <input className='text-2xl border-4 border-[#3d3d3d]   m-5 px-4 py-2
    ' type="text" placeholder="write your Title  here "
          value={title}
          onChange={(e) => {
            //console.log(e.target.value)  //isko setitle m daldo 
            settitle(e.target.value)
          }} />




        <input className='text-2xl border-4 border-[#3d3d3d]  m-5 px-4 py-2
    ' type="text" placeholder="write description  here "
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}

        />

        <button className='bg-[#0B87D3] text-white px-3 py-2 text-2xl 
    font-bold rounded m-5'>Add Task</button>
      </form>


      <hr />

      <div className='p-8 bg-[#0b2c46] text-white'>


        <ul>
          {renderTask}
        </ul>
      </div>





    </>
  )
}

export default page;