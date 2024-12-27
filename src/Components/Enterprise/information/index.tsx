import React from 'react'

const About_enterprise = () => {
    return (
        <div className='absolute right-20 top-24 text-white text-end w-[40vw] md:block hidden'>
            <div className='flex justify-end w-full'>
                <h1 className='bg-gray-600 font-bold cursor-pointer rounded w-fit py-2 px-5'>PORTER ENTERPRISE</h1>
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl font-bold'>Reliable Logistics with Seamless Control</h1>
            </div>
            <div className='text-yellow-400 font-bold mt-5 text-lg'>
                <span>
                    Centralised Management
                </span>
                <span className='px-2'>|</span>
                <span>
                    Transparent Operations & Full Control
                </span>
                <span className='px-2'>|</span>
                <span>
                    Hassle-Free Enterprise Logistics
                </span>
            </div>

        </div>
    )
}

export default About_enterprise