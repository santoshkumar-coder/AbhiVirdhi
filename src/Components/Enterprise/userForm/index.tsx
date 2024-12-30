import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";

const FillOutUserForm = () => {
    return (
        <div className='absolute top-10 md:left-20 left-14 md:w-[30%] bg-gray-100 p-5 rounded-xl font-titillium '>
            <h1 className='text-center text-gray-800 font-bold text-xl'>Fill Out For More Details</h1>
            <form action="">
                <div className='flex items-center rounded-md gap-4 border-2 border-gray-400 px-2 py-3 mt-5'>
                    <label htmlFor=""><FaUser /></label>
                    <input
                        className="border-none w-full bg-transparent ring-none focus:ring-none focus:ring-blue-500 focus:border-transparent focus:outline-none "
                        type="text"
                        placeholder="Enter your Name"
                        aria-label="Name"
                    />
                </div>
                <div className='flex items-center  rounded-md  gap-4 border-2 border-gray-400 px-2 py-3 mt-5'>
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="14" viewBox="0 0 18 14" fill="none">
                            <path d="M10.6666 7.83337H14.8333V6.16671H10.6666V7.83337ZM10.6666 5.33337H14.8333V3.66671H10.6666V5.33337ZM3.16663 10.3334H9.83329V9.87504C9.83329 9.25004 9.52774 8.75351 8.91663 8.38546C8.30552 8.0174 7.49996 7.83337 6.49996 7.83337C5.49996 7.83337 4.6944 8.0174 4.08329 8.38546C3.47218 8.75351 3.16663 9.25004 3.16663 9.87504V10.3334ZM6.49996 7.00004C6.95829 7.00004 7.35065 6.83685 7.67704 6.51046C8.00343 6.18407 8.16663 5.79171 8.16663 5.33337C8.16663 4.87504 8.00343 4.48268 7.67704 4.15629C7.35065 3.8299 6.95829 3.66671 6.49996 3.66671C6.04163 3.66671 5.64926 3.8299 5.32288 4.15629C4.99649 4.48268 4.83329 4.87504 4.83329 5.33337C4.83329 5.79171 4.99649 6.18407 5.32288 6.51046C5.64926 6.83685 6.04163 7.00004 6.49996 7.00004ZM2.33329 13.6667C1.87496 13.6667 1.4826 13.5035 1.15621 13.1771C0.82982 12.8507 0.666626 12.4584 0.666626 12V2.00004C0.666626 1.54171 0.82982 1.14935 1.15621 0.822957C1.4826 0.496568 1.87496 0.333374 2.33329 0.333374H15.6666C16.125 0.333374 16.5173 0.496568 16.8437 0.822957C17.1701 1.14935 17.3333 1.54171 17.3333 2.00004V12C17.3333 12.4584 17.1701 12.8507 16.8437 13.1771C16.5173 13.5035 16.125 13.6667 15.6666 13.6667H2.33329Z" fill="#4E525A" />
                        </svg>
                    </label>
                    <input
                        className="border-none w-full bg-transparent ring-none focus:ring-none focus:ring-blue-500 focus:border-transparent focus:outline-none "
                        type="text"
                        placeholder="Enter your Company Name"
                        aria-label="Name"
                    />
                </div>
                <div className='flex items-center  rounded-md  gap-4 border-2 border-gray-400 px-2 py-3 mt-5'>
                    <label htmlFor=""><IoCallSharp /></label>
                    <input
                        className="border-none w-full bg-transparent ring-none focus:ring-none focus:ring-blue-500 focus:border-transparent focus:outline-none "
                        type="text"
                        placeholder="Enter your Phone Number"
                        aria-label="Name"
                    />
                </div>
                <div className='flex items-center gap-4  rounded-md  border-2 border-gray-400 px-2 py-3 mt-5'>
                    <label htmlFor=""><IoIosMailOpen /></label>
                    <input
                        className="border-none w-full bg-transparent ring-none focus:ring-none focus:ring-blue-500 focus:border-transparent focus:outline-none "
                        type="text"
                        placeholder="Enter your Email ID"
                        aria-label="Name"
                    />
                </div>
                <button className='mt-5 bg-blue-800 font-bold rounded-md hover:bg-blue-700 w-full py-3 text-white'>Get in Touch</button>
            </form>
        </div>
    )
}

export default FillOutUserForm