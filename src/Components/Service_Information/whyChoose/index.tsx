import React from 'react'

const WhyChosse = () => {
    return (
        <div className='flex flex-col items-center justify-center font-titillium '>
            <div>
                <h1 className='text-xl font-bold'>Why Choose Porter Pickup and Delivery Services?</h1>
            </div>
            <div className='mt-10 space-y-5'>
                <div className='bg-white px-7 rounded-lg py-2'>
                    <h1 className='font-semibold text-lg'>End-to-end Services</h1>
                    <p className='text-gray-800'>Enjoy on-demand pickup and delivery services at your location</p>
                </div>
                <div className='bg-white px-7 rounded-lg py-2'>
                    <h1 className='font-semibold text-lg'>Get Quick Deliveries</h1>
                    <p>Get your documents, lunch boxes, forgotten keys or other small items picked up and delivered efficiently</p>
                </div>
                <div className='bg-white px-7 rounded-lg py-2'>
                    <h1 className='font-semibold text-lg'>Get Anything Delivered</h1>
                    <p>Be it a pen or product samples, send any consignment up to 20 kg anywhere across the city</p>
                </div>
                <div className='bg-white px-7 rounded-lg py-2'>
                    <h1 className='font-semibold text-lg'>Reliable Consignment Delivery</h1>
                    <p>Book Porter Two-wheeler delivery services online and get quick delivery.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChosse