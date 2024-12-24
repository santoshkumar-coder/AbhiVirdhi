import React, { useEffect, useState } from 'react'
import { terms_of_service } from '../../api_fetch/terms_of_services';

interface Terms_of_service_Data {
    heading: string,
    description: string
}

const Terms_of_service = () => {
    const [data, setData] = useState<Terms_of_service_Data[] | null>(null)

    const fetchData = async () => {
        const rs = await terms_of_service();
        console.log(rs.terms_of_service);
        setData(rs.terms_of_service)
    }
    useEffect(() => {
        fetchData();
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='min-h-screen font-titillium'>
            <div>
                <h1 className='text-center uppercase py-10 text-xl font-bold'>Terms of Service</h1>
                <div className='flex justify-center items-center'>
                    <div className='md:w-[80%] w-[90%] text-justify md:p-10 p-5 mt-5 mb-10 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.25)]'>
                        {
                            data?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.heading !== "Terms Of Service" && <h1 className='capitalize font-bold text-xl'>{item.heading}</h1>}
                                        <p className='text-sm'>{item.description.split("\n").map((item: string) => <p className='my-2'>{item}</p>)}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms_of_service