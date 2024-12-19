import React from 'react'

interface MakeLifeEasyProps {
    data?: {
        own_multiple_vehicle_image: string
    };
}

const MultipleVehicles: React.FC<MakeLifeEasyProps> = ({ data }) => {
    return (
        <div className='p-10'>
            <h1 className='text-center font-bold text-2xl p-10'>OWN MULTIPLE VEHICLES?</h1>
            {data ? (
                <div className="text-justify flex w-full items-center gap-10 shadow-[0_4px_8px_rgba(0,0,0,0.2),0_-4px_8px_rgba(0,0,0,0.2)] p-4 rounded-xl">
                    <div className='w-[50%]'>
                        <img
                            src={data.own_multiple_vehicle_image}
                            alt="Making Life Easy"
                            className="mx-auto rounded-xl w-full h-full object-cover border-2 border-gray-100"
                        />
                    </div>
                    <div className='w-[50%] space-y-3'>
                        <h1 className='font-bold text-lg'>If you are a fleet owner and own multiple vehicles.</h1>
                        <p className="text-gray-700 ">Keeping track of your vehicle fleet and optimising their efficiency can be a huge challenge. Partner with Porter to boost your earnings and manage your vehicles easily.</p>
                        <button className="px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded hover:from-blue-600 hover:to-violet-600">
                            CONTACT US
                        </button>

                    </div>
                </div>
            ) : (
                <div>No Data Available</div>
            )}
        </div>
    )
}

export default MultipleVehicles