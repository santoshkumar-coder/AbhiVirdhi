import React from 'react';

interface MakeLifeEasyProps {
    data?: {
        making_life_easy_description: string;
        making_life_easy_image: string;
    };
}

const MakeLifeEasy: React.FC<MakeLifeEasyProps> = ({ data }) => {
    return (
        <div className='md:p-10 p-5'>
            <h1 className='text-center font-bold text-2xl md:p-10 py-10'>MAKING YOUR LIFE EASY</h1>
            {data ? (
                <div className="text-justify md:flex w-full items-center gap-10 shadow-[0_4px_8px_rgba(0,0,0,0.2),0_-4px_8px_rgba(0,0,0,0.2)] p-4 rounded-xl">
                    <p className="text-gray-700 md:w-[50%] font-semibold">{data.making_life_easy_description}</p>
                    <div className='md:w-[50%]'>
                        <img
                            src={data.making_life_easy_image}
                            alt="Making Life Easy"
                            className="mx-auto md:mt-auto mt-5 rounded-xl w-full h-full object-cover border-2 border-gray-100"
                        />
                    </div>
                </div>
            ) : (
                <div>No Data Available</div>
            )}
        </div>
    );
};

export default MakeLifeEasy;
