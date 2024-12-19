import React, { useEffect, useState } from 'react'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { Insurance_faq } from '../../api_fetch/insurance_faq';

interface InsuranceData {
    insurance_answer: string,
    insurance_question: string
}

const Insurance_FAQS = () => {
    const [showindex, setIndex] = useState<number>(-1);
    const [show, setShow] = useState<boolean>(false);
    const [data, setData] = useState<InsuranceData[] | null>(null)

    const fetchData = async () => {
        const rs = await Insurance_faq();
        console.log(rs);

        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='min-h-screen font-titillium'>
            <div>
                <h1 className='text-center uppercase py-10 text-xl font-bold'>INSURANCE Friquently Ask Questions</h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-[80%] my-10'>
                    {data?.map((item, index) => {
                        return (
                            <div className='border-b-2 border-gray-200 mt-5 py-5' >
                                <div className='flex items-center justify-between cursor-pointer'
                                    onClick={() => {
                                        setIndex((old) => old === index ? -1 : index)
                                        setShow((old) => showindex === index ? false : true)
                                    }}
                                >
                                    <h1 className='font-bold text-xl text-gray-600 select-none'>{item.insurance_question}</h1>
                                    {/* <h1 className='font-bold text-xl text-gray-600 select-none'>Questions</h1> */}
                                    {show && showindex === index ?
                                        <VscTriangleUp className='w-5 h-5 text-gray-700' />
                                        : <VscTriangleDown className='w-5 h-5 text-gray-700' />
                                    }
                                </div>
                                {show && showindex === index && <p className='select-none font-semibold my-3 ml-3 text-gray-600 text-justify'>{item.insurance_answer}</p>}
                                {/* <p className='select-none font-semibold my-3 ml-3 text-gray-600 text-justify'>Answer</p> */}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Insurance_FAQS