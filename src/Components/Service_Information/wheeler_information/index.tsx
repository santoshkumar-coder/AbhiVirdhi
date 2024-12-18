import React from 'react'
import twoWheelerInformation from '../../../assests/twowheelerInformation.svg';
import { IoBag } from "react-icons/io5";
import { useParams } from 'react-router-dom';


const Wheeler_Information = () => {
    const params = useParams();

    return (
        <div className='font-titillium'>
            <div className='flex flex-col justify-center items-center py-10 px-5 '>
                <h1 className='text-2xl font-semibold'>{params.serviceInformation} from Porter</h1>
                <div className='w-[70%] p-5 flex border-2 border-gray-300 my-10 bg-white rounded-lg' >
                    <div>
                        <img className='w-[50rem] h-[15rem]' src={twoWheelerInformation} alt="twoWheelerInformation" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>
                            2 Wheeler
                        </h1>
                        <span className='flex items-center gap-3 bg-blue-200 w-fit py-1 px-2 rounded-lg'><IoBag /> 20 kg</span>
                        <h1 className='text-xl  my-2'>Starting from <span className='font-semibold text-2xl'>₹30</span></h1>
                        <p className='text-justify text-gray-800'>Base fare is inclusive of 1.0 km distance & 25 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare.</p>
                        <h1 className='mt-5 underline text-blue-700 hover:text-blue-500 cursor-pointer select-none font-bold text-xl w-fit'>Know More</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wheeler_Information