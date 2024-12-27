import React from 'react'

const CustomersReview = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <h1 className='font-bold text-xl text-center'>SOME WORDS FROM OUR HAPPY CUSTOMERS</h1>
            <div className='flex justify-center items-center py-10 md:px-0 px-3'>
                <div className='md:flex justify-center md:w-[70%] gap-10'>
                    <div className='md:w-[30%] select-none hover:bg-gray-100 p-5 rounded-xl'>
                        <h1 className='text-lg font-bold '>Logistics Manager</h1>
                        <p className='py-2 font-bold text-gray-600'>at a Leading FMCG MNC</p>
                        <p className='text-gray-600 text-justify'>"Porter has emerged as a very reliable logistics provider and has provided us with a good option to scale with better SLAs."</p>
                    </div>
                    <div className='md:w-[30%] select-none hover:bg-gray-100 p-5 rounded-xl'>
                        <h1 className='text-lg font-bold '>CEO</h1>
                        <p className='py-2 font-bold text-gray-600'>of an Ecommerce company</p>
                        <p className='text-gray-600 text-justify'>“They helped us with ground level sensitivity on vehicle utilisation. Their gps tracking system helped us ensure delivery in time and detect inefficiencies.”</p>
                    </div>
                    <div className='md:w-[30%] select-none hover:bg-gray-100 p-5 rounded-xl'>
                        <h1 className='text-lg font-bold '>Logistics Head</h1>
                        <p className='py-2 font-bold text-gray-600'>at a Leading FMCG MNC</p>
                        <p className='text-gray-600 text-justify'>“We had introduced Porter in Mumbai for our fleet, they performed beyond expectations in terms of vehicle deployment and helped us scale at a much faster rate. This was done with complete visibility of service data on daily basis which helped understand the problems and immediate rectification of problems.”</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CustomersReview