import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskContext';

const List = () => {
    const {taskItems, setTaskItems} = useContext(TaskContext);


    const handleSetDoneTask = (id) => {
        const index = taskItems.findIndex((task) => task.id === id);
        const newTaskItems = [...taskItems];
        newTaskItems[index].isDone = !newTaskItems[index].isDone;
        setTaskItems(newTaskItems);
    };

    const handleDeleteTask = (id) => {
        const newTask = taskItems.filter((task) => task.id !== id);
        setTaskItems(newTask);
    };

    if(taskItems.length) {
        return (        
            <ul className="mt-16 mb-4 rounded-md break-all md:text-sm mx-auto space-y-4"> 
                {
                    taskItems.map((item) => (
                        <li id="taskItem" className={`flex justify-between items-center animate-show break-all min-h-[60px] bg-slate-700 animate-show rounded-md p-4 text-gray-100 mt-3 duration-300 transition-all ${item.isDone ? 'opacity-40 cursor-not-allowed' : 'opacity-100 hover:-translate-y-1'}`}>
                            <div className="flex items-center">
                                <h4 className={`text-gray-200 text-xs sm:text-sm ${item.isDone ? 'line-through' : ''}`}>{item.task}</h4>
                                <span className="ml-5 text-[.6rem] text-gray-400">{item.date}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <button onClick={() => handleSetDoneTask(item.id)} id="doneBtnTask" type="button" className="block md:hidden duration-300 transition-all">
                                    {
                                        item.isDone ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600 opacity-80 hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700 opacity-80 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )
                                    }
                                </button>
    
                                <button onClick={() => handleDeleteTask(item.id)} type="button" id="deleteBtnTask" className="block md:hidden duration-300 transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700 opacity-80 hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </li> 
                    ))
                }
            </ul>
        );
    } else {
        return <h4 className="text-center text-red-600 mt-14">No Task ...</h4>
    };
};

export default List;