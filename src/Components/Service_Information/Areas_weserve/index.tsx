import React, { useEffect, useState } from 'react';
import { FaCircleDot } from "react-icons/fa6";
import { cities } from '../../../api_fetch/cities';

interface Cities {
    image: string;
    name: string;
}

interface DataItem {
    id: number;
    name: string;
}

interface ResponseData {
    state: { image: string, name: string };
    data: DataItem[];
}

interface AreasServe {
    data: ResponseData | null;
}

const Areas_serve: React.FC<AreasServe> = ({ data }) => {
    const [citiesData, setCitiesData] = useState<Cities[] | null>(null);

    useEffect(() => {

    }, []);

    const fetchData = async () => {
        const rs = await cities(); // Assuming cities() returns an array of city data
        setCitiesData(rs);
        console.log("Fetched cities:", rs);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center font-titillium py-16'>
            <div>
                <h1 className='text-xl font-bold'>Areas We Serve</h1>
            </div>
            <div className='mt-10 w-[70%] flex flex-wrap items-center justify-center gap-3'>
                {data?.data?.map((item, index) => (
                    <div className='flex ml-6 items-center gap-2 leading-tight select-none' key={index}>
                        <FaCircleDot className='w-3 h-3 text-gray-400' />
                        <h1 className='text-gray-800 capitalize'>{item.name}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Areas_serve;
