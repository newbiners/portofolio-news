import React from 'react';

const TitleRotate2 = () => {
    const data = "I Front-end developer";
    const arrayData = data.split('');
    return (
        <div className=" w-[200px] h-[200px]  rounded-full relative">
            <div className="absolute h-full w-full rounded-full animated ">
                {arrayData.map((item, index) => (
                    <div key={index} className='flex items-center justify-center'>
                        <p style={{ transform: `rotate(${index * 17}deg)` }} className="transform-text-2 font-bold">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleRotate2;