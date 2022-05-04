import React from 'react';

const ShowDate = () => {
    const handleShowDate = () => {
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayName = days[new Date().getDay()];

        console.log(Date.now())
        return dayName;
    };
    return (
        <>
            <h4 className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-center py-4 animate-[pulse_7s_infinite] flex justify-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="select-none">Today is </span>
                <span className="font-bold select-all">{handleShowDate()}</span>
            </h4>
        </>
    );
};

export default ShowDate;