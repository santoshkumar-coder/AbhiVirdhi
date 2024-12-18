import React from 'react'
import keyFeatures from '../../../assests/keyFeatures.png'
import keyFeatures1 from '../../../assests/keyFeatures2.png'
import keyFeatures2 from '../../../assests/keyFeatures3.png'
import keyFeatures3 from '../../../assests/keyFeatures4.png'

const Key_features = () => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-3xl font-bold'>Key Features We Offer</h1>
            <div className='w-full flex px-10 mt-10 gap-5'>
                <div className='w-2/5 bg-gray-800 px-10 py-7 rounded-3xl'>
                    <h1 className='text-2xl font-bold mb-3'>Payments through Prepaid Wallet</h1>
                    <p className='font-semibold mb-3'>No Cash reimbursement hassle as all the trips are prepaid.</p>
                    <img src={keyFeatures1} alt="keyFeatures" />
                </div>
                <div className='w-3/5 bg-gray-800 px-10 py-7 rounded-3xl'>
                    <h1 className='text-2xl font-bold mb-3'>Unified Trip Details</h1>
                    <p className='font-semibold mb-3'>Check all your trip information and track deliveries across cities</p>
                    <img src={keyFeatures} alt="keyFeatures" />
                </div>
            </div>
            <div className='w-full flex px-10 mt-10 gap-5'>

                <div className='w-3/5 bg-gray-800 px-10 py-7 rounded-3xl'>
                    <h1 className='text-2xl font-bold mb-3'>Multi-User Access</h1>
                    <p className='font-semibold mb-3'>Seamlessly add, remove, activate, or deactivate users to maintain unified operations across cities and warehouses.</p>
                    <img src={keyFeatures3} alt="keyFeatures" />
                </div>
                <div className='w-2/5 bg-gray-800 px-10 py-7 rounded-3xl'>
                    <h1 className='text-2xl font-bold mb-3'>Complete Clarity and Control</h1>
                    <p className='font-semibold mb-3'>Monitor wallet usage with full visibility.</p>
                    <img src={keyFeatures2} alt="keyFeatures" />
                </div>
            </div>
        </div>
    )
}

export default Key_features