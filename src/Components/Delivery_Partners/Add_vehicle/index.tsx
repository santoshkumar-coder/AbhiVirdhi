import React from 'react'
import googlePlayStore from '../../../assests/googlePlayStore.png';

const Add_vehicle = () => {
    return (
        <div className='absolute bottom-10 right-10 w-[100%] pl-20 '>
            <div className='flex items-end justify-between'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>Start Earning Immediately</h1>
                    <h1 className=' text-gray-500'>Download the partner app and register</h1>
                    <div className='w-40 h-14 mt-5'>
                        <img className='w-full h-full' src={googlePlayStore} alt="googlePlayStore" />
                    </div>
                </div>
                <div className='text-end w-[60%]'>
                    <h1 className='text-[#5e0be0]  text-4xl font-bold'>Attach mini trucks or bike</h1>
                    <p className='text-gray-800  text-2xl' >Earn money by delivering goods, courier and packages. Get a part time or full time delivery job</p>
                </div>
            </div>

        </div>
    )
}

export default Add_vehicle