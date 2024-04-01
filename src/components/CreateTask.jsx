import React, { useState } from 'react'
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid'

const CreateTask = ({ setCreateTask, tasks, setTasks }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState("low")
    const [assignee, setAssignee] = useState(null)

    const handleCreateTask = () => {
        const newTask = {
            id: uuidv4(),
            title: title,
            description: description,
            status: "pending",
            start_date: moment(new Date()).format('MMMM Do YYYY'),
            priority: priority,
            assignee: assignee

        };
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
        setCreateTask(false)
        setPriority('low');
    };

    return (
        <div className='flex w-full flex-col' >
            <h1><i class="fa-solid fa-plus"></i>&nbsp;create a new task</h1>
            <input
                className='mb-2 mt-5 bg-transparent focus:outline-none outline-none border dark:border-slate-700 border-slate-400 rounded-lg p-2 text-xs'
                type="text"
                placeholder="write a short and precise title.."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className='bg-transparent focus:outline-none outline-none border border-slate-400 dark:border-slate-700 rounded-lg p-2 text-xs'
                placeholder="write an elaborative description for your task.."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <div className='flex text-xs justify-start mt-5 flex-col dark:text-slate-400' >
                <h1 className='mb-2' >choose priority</h1>
                <div className='flex item-center'>
                    <input
                        type="radio"
                        id="low"
                        value="low"
                        checked={priority === 'low'}
                        onChange={() => setPriority('low')}
                        className='mr-1'
                    />
                    <label htmlFor="low" className='mr-3' >low</label>

                    <input
                        type="radio"
                        id="medium"
                        value="medium"
                        checked={priority === 'medium'}
                        onChange={() => setPriority('medium')}
                        className='mr-1'

                    />
                    <label htmlFor="medium" className='mr-3' >medium</label>

                    <input
                        type="radio"
                        id="high"
                        value="high"
                        checked={priority === 'high'}
                        onChange={() => setPriority('high')}
                        className='mr-1'

                    />
                    <label htmlFor="high">high</label>


                </div>

                <input
                    className='mb-2 mt-5 bg-transparent focus:outline-none outline-none border border-slate-400 dark:border-slate-700 rounded-lg p-2 text-xs'
                    type="text"
                    placeholder="Assignee name.."
                    value={assignee}
                    onChange={(e) => setAssignee(e.target.value)}
                />
            </div>

            <button className='place-self-end mt-5 p-2 rounded-md border border-slate-400 dark:border-slate-700 text-xs min-w-24 ' onClick={handleCreateTask}>+ create_task</button>

        </div>
    )
}

export default CreateTask