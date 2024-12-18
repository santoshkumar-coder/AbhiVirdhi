import React, { useState } from 'react';
import { FAMOUS_CITIES } from '../../../constants';
import { FaCircleDot } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { SELECTED_CITY } from '../../../redux/action';
import { Link, useParams } from 'react-router-dom';

const OurOtherServices: React.FC = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // Add loading state

    const handleClick = (cityName: string) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000)
        dispatch({
            type: SELECTED_CITY,
            payload: cityName
        });
        window.scrollTo(0, 0);
    };

    return (
        <div className='mt-5 font-titillium flex items-center justify-center'>
            <div className='w-[80%]'>
                <div>
                    <h1 className='text-2xl font-bold text-gray-800'>Choose from our services</h1>
                </div>
                <div>
                    <h1 className='text-lg font-bold text-gray-700 mt-5'>Choose from our services</h1>
                </div>

                <div className='mt-3'>
                    <div className='flex flex-wrap gap-2 text-gray-700 select-none'>
                        {FAMOUS_CITIES?.map((item, index) => (
                            <Link
                                key={index}
                                to={`/service/${params.serviceInformation}/${item.name}`}
                                className='flex items-center gap-1 ml-5 cursor-pointer hover:text-blue-500'
                                onClick={() => handleClick(item.name)}  // Use handleClick function
                            >
                                <FaCircleDot className='w-3 h-3 text-gray-400' />
                                <h1>Delivery Service in {item.name}</h1>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className='text-lg font-bold text-gray-700 mt-5'>Explore Mini Truck Rental Services in India</h1>
                </div>

                <div className='mt-3'>
                    <div className='flex flex-wrap gap-2 text-gray-700 select-none'>
                        {FAMOUS_CITIES?.map((item, index) => (
                            <Link
                                key={index}
                                to={`/service/Mini Trucks/${item.name}`}
                                className='flex items-center gap-1 ml-5 cursor-pointer hover:text-blue-500'
                                onClick={() => handleClick(item.name)}  // Use handleClick function
                            >
                                <FaCircleDot className='w-3 h-3 text-gray-400' />
                                <h1>Rent Mini Trucks {item.name}</h1>
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className='text-lg font-bold text-gray-700 mt-5'>Explore Larger Truck Rental Services in India</h1>
                </div>

                <div className='mt-3'>
                    <div className='flex flex-wrap gap-2 text-gray-700 select-none text-justify'>
                        {FAMOUS_CITIES?.map((item, index) => (
                            <Link
                                key={index}
                                to={`/service/Larger Trucks/${item.name}`}
                                className='flex items-center gap-1 ml-5 cursor-pointer hover:text-blue-500'
                                onClick={() => handleClick(item.name)}  // Use handleClick function
                            >
                                <FaCircleDot className='w-3 h-3 text-gray-400' />
                                <h1>Rent Larger Trucks {item.name}</h1>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOtherServices;
