import React from 'react'


const TaskColumn = ({ handleTaskClick, status, sortedTasks }) => {


    const truncatedDescription = (desc) => {
        const td = desc.length > 10 ? `${desc.slice(0, 60)}...` : desc;
        return td
    }



    return (
        <div className='flex min-w-60  flex-1 flex-col mr-2 border border-zinc-300 
        dark:border-slate-700 rounded-lg  max-[370px]:rounded-sm py-4 px-2 text-sm min-h-20 min-w-36 pb-10   max-[370px]:text-xs ' >
            <div className='flex w-full justify-center border-b  pb-4 dark:border-slate-700' >{status}</div>
            <ol className='mt-5' >
                {
                    sortedTasks.map((task, index) => {
                        return (

                            task.status == status && (
                                <li onClick={() => handleTaskClick(task)} key={index} className='flex flex-col w-full pb-5 cursor-pointer dark:hover:bg-slate-800 p-2 hover:bg-slate-200 ' >
                                    <h1 className='flex w-full' > <span className='text-left' >{task.title}</span>  </h1>
                                    <p className='mt-2 dark:text-slate-400 text-zinc-500 text-xs flex justify-between' > <span>Start - {task.start_date} </span> <span >{task.priority}</span></p>
                                    <p className='text-xs text-left dark:text-slate-500 text-zinc-500 mt-2 ' > {truncatedDescription(task.description)} </p>

                                </li>)
                        )
                    })

                }
                {
                    sortedTasks.length == 0 && (<p className='flex justify-center w-full text-xs text-slate-500 mt-10' >No pending tasks to display</p>)
                }
            </ol>
        </div>
    )
}

export default TaskColumn