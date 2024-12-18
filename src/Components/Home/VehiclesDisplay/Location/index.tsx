import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import Cities from '../Cities';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../redux/action';

interface LocationProps {
    setCity: (city: boolean) => void;
}

const Location: React.FC<LocationProps> = ({ setCity }) => {

    const selector = useSelector((state: AppState) => state.select_city);
    return (
        <div className='mb-10 '>
            <h1 className='flex items-center gap-3 text-gray-600 hover:cursor-pointer w-fit'
                onClick={() => setCity(true)}
            >
                <FaLocationDot /> <span className='font-bold font-titillium text-lg'>City</span> <span className='font-bold font-titillium text-gray-800 text-lg'>{selector}</span> <FaCaretDown className='text-black' />
            </h1>

        </div>
    )
}

export default Location