import React from 'react';

const TitleRotate = () => {
    const data = "My Name Gufron Aprilianto - I Front-end developer";
    const arrayData = data.split('');
    return (
        <div className=" w-[300px] h-[300px] rounded-full relative">
            <div className="absolute h-full w-full rounded-full animated ">
                {arrayData.map((item, index) => (
                    <div key={index} className='flex items-center justify-center'>
                        <p style={{ transform: `rotate(${index * 7}deg)` }} className="transform-text font-bold text-xs hidden xl:block 2xl:text-base">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TitleRotate;
