import React, { useState } from 'react'
import twoWheelerInformation from '../../../assests/twowheelerInformation.svg';
import { IoBag } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import GetEstmate from '../../Home/EstimatePage';

interface VehicelsInfo {
    image: string,
    name: string
    starting_price: string
    weight: string
    width: string
}

interface WheelerInformationProps {
    data: VehicelsInfo[]; // Expecting an array of vehicles info
}

const Wheeler_Information: React.FC<WheelerInformationProps> = ({ data }) => {
    const params = useParams();
    const [estimate, setEstimates] = useState<boolean>(false);

    return (
        <div className='font-titillium'>
            {data ?
                <div className='flex flex-col justify-center items-center py-10 px-5 '>
                    <h1 className='text-2xl font-semibold'>{params.serviceInformation} from Porter</h1>
                    <div className='md:w-[70%] p-5 md:flex border-2 border-gray-300 my-10 bg-white rounded-lg gap-5' >
                        <div>
                            <img className='w-[50rem] h-[15rem]' src={data[0]?.image} alt="twoWheelerInformation" />
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold md:text-start text-end'>
                                {data[0]?.name}
                            </h1>
                            <span className='flex items-center gap-3 bg-blue-200 w-fit py-1 px-2 rounded-lg'><IoBag /> {data[0]?.weight}</span>
                            <h1 className='text-xl  my-2'>Starting from <span className='font-semibold text-2xl'>₹{data[0]?.starting_price}</span></h1>
                            <p className='text-justify text-gray-800'>Base fare is inclusive of 1.0 km distance & 25 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare.</p>
                            <h1 className='mt-5 underline text-blue-700 hover:text-blue-500 cursor-pointer select-none font-bold text-xl w-fit' onClick={() => setEstimates(true)}>Know More</h1>
                        </div>
                    </div>
                    {estimate &&
                        <GetEstmate setEstimates={setEstimates} />}
                </div>
                :
                <div>Loading...</div>
            }
        </div>
    )
}

export default Wheeler_Information