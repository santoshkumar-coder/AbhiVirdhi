import React, { useEffect, useState } from 'react'
import { ASKED_QUESTIONS } from '../../../constants'
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import { faqs } from '../../../api_fetch/faqs';

interface Faq {
    question: string,
    answer: string
}


const AskedQuestions = () => {
    const [showindex, setIndex] = useState<number>(-1);
    const [show, setShow] = useState<boolean>(false);
    const [data, setData] = useState<Faq[] | null>(null);
    const fetchData = async () => {
        const rs = await faqs();
        setData(rs)
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='font-titillium my-10 flex flex-col items-center justify-center w-full'>

            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-3xl'>Frequently Asked Questions</h1>
                <h2 className='text-lg mt-3 text-gray-600'>In case you have more questions, feel free to reach out to us.</h2>
            </div>
            <div className='w-[80%] my-10'>
                {data?.map((item, index) => {
                    return (
                        <div className='border-b-2 border-gray-200 mt-5 py-5' key={index}>
                            <div className='flex items-center justify-between cursor-pointer'
                                onClick={() => {
                                    setIndex((old) => old === index ? -1 : index)
                                    setShow((old) => showindex === index ? false : true)
                                }}
                            >
                                <h1 className='font-bold text-xl text-gray-600 select-none'>{item.question}</h1>
                                {show && showindex === index ? <VscTriangleUp className='w-5 h-5 text-gray-700' /> : <VscTriangleDown className='w-5 h-5 text-gray-700' />}
                            </div>
                            {show && showindex === index && <p className='select-none font-semibold my-3 ml-3 text-gray-600 text-justify'>{item.answer}</p>}
                        </div>
                    );
                })}
            </div>


        </div>
    )
}

export default AskedQuestions