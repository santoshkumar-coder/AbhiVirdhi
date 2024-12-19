import React from 'react';
import googlePlayStore from '../../../assests/googlePlayStore.png';

const Add_vehicle = () => {
    return (
        <div className="absolute md:bottom-10 bottom-2 right-10 w-full md:pl-20 pl-16">
            {/* Flex container */}
            <div className="flex flex-col md:flex-row md:items-end justify-between">
                {/* First Section */}
                <div className="flex md:flex-col items-center md:justify-center justify-between order-2 md:order-1 md:mt-0 md:w-[30%]">
                    <div>
                        <h1 className="md:text-2xl text-sm font-bold text-gray-800 ">Start Earning Immediately</h1>
                        <h1 className="text-gray-500 md:text-base text-xs">Download the partner app and register</h1>
                    </div>
                    <div className="md:w-40 w-20 md:h-14 h-8 mt-5">
                        <img className="w-full h-full" src={googlePlayStore} alt="googlePlayStore" />
                    </div>
                </div>
                {/* Second Section */}
                <div className="md:text-end text-center w-full md:w-[70%] order-1 md:order-2 md:mt-auto ">
                    <h1 className="text-[#5e0be0] md:text-4xl text-2xl font-bold">Attach mini trucks or bike</h1>
                    <p className="text-gray-800 md:text-2xl text-sm">
                        Earn money by delivering goods, courier and packages. Get a part time or full time delivery job
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Add_vehicle;
