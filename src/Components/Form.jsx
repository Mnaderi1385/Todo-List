import React, { useContext, useState } from 'react';
import { TaskContext } from '../Context/TaskContext';
import Swal from 'sweetalert2';

const Form = () => {
    const [taskInput, setTaskInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const {taskItems, setTaskItems} = useContext(TaskContext);
    
    const handleSetTask = (e) => setTaskInput(e.target.value);
    const handleSetDate = (e) => setDateInput(e.target.value);

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskInput('');

        if(taskInput.length === 0) {
            Swal.fire({
                icon: 'error',
                title: "Input Can't Be Empty",
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 4500,
                position: 'bottom',
                background: '#bb0f0f',
                animation: true,
                color: '#fff',
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                    toast.addEventListener('click', Swal.close);
                }
            });
        } else if(taskInput.length > 90) {
            Swal.fire({
                icon: 'error',
                title: "Task Input Can't Be More Than 90 Characters",
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 4500,
                position: 'bottom',
                background: '#bb0f0f',
                animation: true,
                color: '#fff',
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                    toast.addEventListener('click', Swal.close);
                }
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Task is Added Successfully !',
                toast: true,
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 4500,
                position: 'bottom',
                background: '#149e0f',
                animation: true,
                color: '#fff',
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer);
                    toast.addEventListener('mouseleave', Swal.resumeTimer);
                    toast.addEventListener('click', Swal.close);
                },
            });
            setTaskItems([...taskItems, {id: Math.random(), task: taskInput, date: dateInput, isDone: false,}]);
        };
    };
    
    return (
        <form className="flex flex-col sm:flex-row w-full" onSubmit={handleAddTask}>
            <input type="text" className="w-full text-sm mt-4 flex outline-none px-4 py-[10px] rounded-md sm:rounded-r-none bg-transparent text-white border border-slate-700 duration-300 transition-all mx-auto opacity-80 focus:border-indigo-600 focus:opacity-100" placeholder="Task ..." value={taskInput} onChange={handleSetTask} />
            <input type="date" className="w-full sm:w-[30%] rounded-md sm:rounded-none text-sm mt-4 flex outline-none px-4 py-[10px] bg-transparent text-white border border-slate-700 duration-300 transition-all mx-auto opacity-80 focus:border-indigo-600 focus:opacity-100" placeholder="Date ..." onChange={handleSetDate}/>
            <button className=" flex justify-center sm:w-auto text-sm duration-300 transition-all mt-4 border border-slate-700 select-none px-4 py-[8px] rounded-md sm:rounded-r-md sm:rounded-l-none text-center text-white bg-slate-800 hover:bg-slate-700 mr-2 focus:border-indigo-800" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </form>
    );
};

export default Form;