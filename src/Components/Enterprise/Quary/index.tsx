import React from 'react'
import quaryImage from '../../../assests/quary.webp'
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from 'react-router-dom';


const Quary = () => {
    return (
        <div className='flex flex-col justify-center w-full items-center gap-10 md:px-0 px-5'>
            <h1 className='font-bold text-xl'>FOR ANY MORE QUERY</h1>
            <div className='md:flex items-center gap-5 jusitfy-center md:w-[80%] bg-gray-200 py-5 rounded-xl px-5'>
                <div className='md:w-80 md:h-60'>
                    <img className='w-full h-full rounded-xl' src={quaryImage} alt="quary" />
                </div>
                <div className='md:w-[50%] '>
                    <p className='text-justify  mt-2 text-gray-700 '>
                        Reach us out on<Link className='text-blue-700 hover:text-blue-400 font-bold cursor-pointer' to="tel:9667309777"> 9667309777</Link> today to know more about us and get benefits from our managed services offering. Our expert team will be happy to know more about your business and recommend the best possible solutions tailored to your logistics needs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Quary