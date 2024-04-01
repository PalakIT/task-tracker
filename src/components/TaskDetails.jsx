import React, { useState, useEffect } from 'react'
import moment from 'moment'

const TaskDetails = ({ selectedTask, handleDeleteTask, tasks, setTasks, setSelectedTask }) => {

    const [priority, setPriority] = useState(null)
    const [status, setStatus] = useState(null)
    const [editTitle, setEditTitle] = useState(false)
    const [newTitle, setNewTitle] = useState(null)
    const [newDescription, setNewDescription] = useState(null)
    const [editDesc, setEditDesc] = useState(false)


    const handleSaveChanges = () => {
        const taskIndex = tasks.findIndex((task) => task.id === selectedTask.id);

        if (taskIndex !== -1) {

            const updatedTask = {
                ...tasks[taskIndex],
                title: newTitle ? newTitle : tasks[taskIndex].title,
                description: newDescription ? newDescription : tasks[taskIndex].description,
                priority: priority ? priority : tasks[taskIndex].priority,
                status: status ? status : tasks[taskIndex].status,
                end_date: status == "completed" ? moment(new Date()).format('MMMM Do YYYY') : null,
                last_edited: moment(new Date()).format('MMMM Do YYYY')
            }

            const updatedTasks = [...tasks]
            updatedTasks[taskIndex] = updatedTask
            setTasks(updatedTasks)
            localStorage.setItem('tasks', JSON.stringify(updatedTasks))
        }
        setSelectedTask(null)
    }

    const handleEditTitle = () => {
        setEditTitle(true)
    }

    const handleEditDesc = () => {
        setEditDesc(true)
    }

    console.log("new title", newTitle)

    return (
        <div className='flex w-full flex-col' >
            <h1 onDoubleClick={handleEditTitle} className='text-md font-bold mb-5'>
                {
                    !editTitle ? (newTitle || <span>{selectedTask.title} <span className='text-xs text-slate-500'> <i class="fa-solid fa-i-cursor text-xs text-slate-500 "></i></span> </span>) : (
                        <div className='flex w-full' >
                            <input
                                type='text' defaultValue={newTitle || selectedTask.title} value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className='  flex flex-1 bg-transparent focus:outline-none outline-none border-b border-slate-300 dark:border-slate-700  w-full'
                            />

                            <button className='ml-7 mr-2' onClick={() => setEditTitle(false)} ><i class="fa-solid fa-check"></i></button>
                        </div>
                    )
                }


            </h1>
            <p className='text-xs leading-5 dark:text-slate-300 mb-5' >start_date : {selectedTask.start_date} <br />
                {
                    selectedTask.end_date && (`end_date : ${selectedTask.end_date}`)

                }
                {
                    selectedTask.end_date && <br />
                }
                {
                    selectedTask.last_edited && (`last edited : ${selectedTask.last_edited}`)
                }
                {
                    selectedTask.last_edited && <br />
                }

                {
                    selectedTask.assignee && (`assigned_to : ${selectedTask.assignee}`)
                }
                {
                    selectedTask.assignee && <br />
                }
                priority :  {selectedTask.priority}  </p>


            <p onDoubleClick={handleEditDesc} className='text-xs leading-5 dark:text-slate-500' >
                {
                    !editDesc ? (newDescription || <span>{selectedTask.description} <i class="fa-solid fa-i-cursor text-xs text-slate-500 "></i> </span>) : (
                        <div className='flex w-full' >
                            <textarea
                                defaultValue={newDescription || selectedTask.description} value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                className='  flex flex-1 bg-transparent focus:outline-none outline-none border-b dark:border-slate-700 border-slate-300  w-full'
                            />

                            <button className='ml-7 mr-2' onClick={() => setEditDesc(false)} ><i class="fa-solid fa-check"></i></button>
                        </div>
                    )
                }
            </p>

            <div className='flex flex-col w-full text-xs my-5' >
                <h1 className='mb-3' >change_priority</h1>
                <div className='flex w-full ' >
                    <input
                        type="radio"
                        id="low"
                        value="low"
                        checked={!priority ? selectedTask.priority == 'low' : priority === 'low'}
                        onChange={() => setPriority('low')}
                        className='mr-1'
                        name='priority'
                    />
                    <label htmlFor="low" className='mr-3' >low</label>

                    <input
                        type="radio"
                        id="medium"
                        value="medium"
                        checked={!priority ? selectedTask.priority == 'medium' : priority === 'medium'}
                        onChange={() => setPriority('medium')}
                        className='mr-1'
                        name='priority'

                    />
                    <label htmlFor="medium" className='mr-3' >medium</label>

                    <input
                        type="radio"
                        id="high"
                        value="high"
                        checked={!priority ? selectedTask.priority == 'high' : priority === 'high'}
                        onChange={() => setPriority('high')}
                        className='mr-1'
                        name='priority'

                    />
                    <label htmlFor="high">high</label>
                </div>
            </div>

            {selectedTask.status !== "completed" && (
                <div className='flex flex-col w-full text-xs mb-5' >
                    <h1 className='mb-3' >change_status</h1>
                    <div className='flex w-full flex-wrap  leading-7' >
                        <span className='flex items-center' >
                            <input
                                type="radio"
                                id="pending"
                                value="pending"
                                checked={!status ? selectedTask.status == 'pending' : status == "pending"}
                                onChange={() => setStatus("pending")}
                                className='mr-1'
                                name='status'
                            />
                            <label htmlFor="pending" className='mr-5' >pending</label>
                        </span>

                        <span className='flex items-center' >
                            <input
                                type="radio"
                                id="in_progress"
                                value="in_progress"
                                checked={!status ? selectedTask.status == 'in progress' : status == "in progress"}
                                onChange={() => setStatus("in progress")}
                                className='mr-1'
                                name='status'
                            />

                            <label htmlFor="in_progress" className='mr-5' >in_progress</label>

                        </span>

                        <span className='flex items-center' >
                            <input
                                type="radio"
                                id="in_progress"
                                value="in_progress"
                                checked={!status ? selectedTask.status == 'completed' : status == 'completed'}
                                onChange={() => setStatus("completed")}
                                className='mr-1'
                                name='status'
                            />
                            <label htmlFor="in_progress" className='mr-5' >completed</label>
                        </span>

                        <span className='flex items-center' >
                            <input
                                type="radio"
                                id="in_progress"
                                value="in_progress"
                                checked={!status ? selectedTask.status == 'deployed' : status == 'deployed'}
                                onChange={() => setStatus("deployed")}
                                className='mr-1'
                                name='status'
                            />
                            <label htmlFor="in_progress" className='mr-5' >deployed</label>
                        </span>
                        <span className='flex items-center' >
                            <input
                                type="radio"
                                id="in_progress"
                                value="in_progress"
                                checked={!status ? selectedTask.status == 'deferred' : status == "deferred"}
                                onChange={() => setStatus("deferred")}
                                className='mr-1'
                                name='status'
                            />
                            <label htmlFor="in_progress" className='mr-5' >deferred</label>
                        </span>
                    </div>
                </div>
            )}

            <div className='flex w-full justify-end' >
                <button disabled={!priority && !status && !newTitle && !newDescription} onClick={() => handleSaveChanges(selectedTask.id)} className={`text-xs mt-5 p-2 border border-slate-400 dark:border-slate-700 rounded-lg  min-w-20 mr-3 ${!priority && !status && !newTitle && !newDescription ? "opacity-40 cursor-not-allowed" : ""}`} ><i class="fa-solid fa-pen"></i>&nbsp;save_changes</button>
                <button onClick={() => handleDeleteTask(selectedTask.id)} className='text-xs mt-5 p-2 border dark:border-slate-700 border-slate-400 rounded-lg  min-w-20  ' ><i class="fa-solid fa-trash"></i>&nbsp;delete_task</button>
            </div></div>
    )
}

export default TaskDetails