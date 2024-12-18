import React from 'react';
import QrCode from '../../../assests/QR_CODE.svg'

const GetPhone = () => {
    return (
        <div className='mt-5 flex items-center justify-center pb-10 font-titillium'>
            <div className='w-[70%] h-60 bg-gradient-to-br from-[#eeaecb] to-[#94bbe9] flex flex-col items-center justify-center'>
                <h1 className='text-xl font-bold'>Think Logistics, Think Porter!</h1>
                <p>Get the Porter mobile app to start booking your orders!</p>
                <img className='w-32 h-32' src={QrCode} alt="QrCode" />
                <p className='text-gray-700'>Scan to download our app!</p>
            </div>
        </div>
    )
}

export default GetPhone