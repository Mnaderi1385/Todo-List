import React, { useEffect, useState } from 'react';
import { TaskContext } from '../Context/TaskContext';
import Form from './Form';
import List from './List';
import Title from './Title';
import ShowDate from './ShowDate';

const App = () => {
    const [taskItems, setTaskItems] = useState([]);

    useEffect(() => {
        const getTask = JSON.parse(localStorage.getItem('task'));

        if(getTask) setTaskItems([...getTask]);
    }, []);

    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(taskItems));
    }, [taskItems]);

    const fullScreen = () => this.fullScreen()

    return (
        <>
            <ShowDate />
            <div className="flex justify-center items-center min-h-screen sm:min-h-[60vh]">
                <button type="button" onClick={fullScreen}>Full Screen</button>
                <div className="md:max-w-4xl w-full sm:w-[70%] mt-16 bg-slate-800 rounded-md py-10 px-5 mx-5 md:mx-auto md:bg-transparent">
                    <TaskContext.Provider value={{
                        taskItems,
                        setTaskItems,
                    }}>
                        <Title />
                        <Form />
                        <List />
                    </TaskContext.Provider>
                </div>
            </div>
        </>
    );
}

export default App;