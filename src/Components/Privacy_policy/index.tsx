import React, { useEffect, useState } from 'react'
import { privacy_policy } from '../../api_fetch/privacy_policy'

interface Policies {
    heading: string,
    description: string
}

const Privacy_Policy = () => {

    const [data, setData] = useState<Policies[] | null>(null)

    const fetchData = async () => {
        const rs = await privacy_policy();
        console.log(rs.policies);
        setData(rs.policies)
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
                <h1 className='text-center uppercase py-10 text-xl font-bold'>Privacy Policy</h1>
                <div className='flex justify-center items-center'>
                    <div className='md:w-[80%] w-[90%] text-justify md:p-10 p-5 mt-5 mb-10 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.5),0_10px_20px_rgba(0,0,0,0.25)]'>
                        {
                            data?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.heading !== "heading" && <h1 className='capitalize font-bold text-xl'>{item.heading}</h1>}
                                        <p className='text-sm'>{item.description.split("\n\n").map((item: string) => <p className='my-2'>{item}</p>)}</p>
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

export default Privacy_Policy