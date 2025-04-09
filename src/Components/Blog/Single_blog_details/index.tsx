import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blog_single_details } from '../../../api_fetch/blog_single_details';
import { FaSquare } from "react-icons/fa";

interface topics_descriptions {
    topic: string;
    description: string;
}

interface Single_Blog_details {
    title: string;
    subtitle: string;
    category_name: string;
    topics_and_descriptions: topics_descriptions[];
    images: string[];
}

const Single_blog_details = () => {
    const { singlePage_blog_id, category_name } = useParams<{ singlePage_blog_id?: string, category_name?: string }>();

    const navigate = useNavigate();

    const [data, setData] = useState<Single_Blog_details | null>(null);

    const fetchData = async () => {
        const rs = await blog_single_details(singlePage_blog_id);
        console.log(rs);
        setData(rs);
    };

    useEffect(() => {
        if (singlePage_blog_id) {
            fetchData();
        }
    }, [singlePage_blog_id]);

    return (
        <div className="min-h-screen font-titillium md:p-10 p-5">
            <div>
                <h1 className="capitalize md:pb-10 pb-5 md:text-3xl text-xl font-extrabold md:text-start text-center">
                    {data?.title}
                </h1>
            </div>
            <div className='md:flex justify-between'>
                <div className='md:w-[70%]'>
                    <div className="h-80 text-center">
                        <img className="w-full h-[85%] rounded-xl" src={data?.images[0]} alt="" />
                        <h1 className="text-xl mt-5">{data?.subtitle}</h1>
                    </div>
                    <div className="my-10 flex ">
                        <div className=''>
                            {data?.topics_and_descriptions?.map((item, index) => (
                                <div key={index}>
                                    <h1 className="font-bold text-lg">{item.topic}</h1>
                                    <div className="py-1 mx-5 text-justify">
                                        {item.description.split(/\n\n|\n/).map((line, lineIndex, lines) => (
                                            <div key={lineIndex} className="flex items-start">
                                                {/* Check if it's the last item, and if so, display an image before the dot */}
                                                <div className='w-2.5 h-2.5 rounded-full bg-black mt-2' />
                                                <span className="ml-2">{line}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <div className="md:w-[27%] md:sticky top-24 h-fit overflow-hidden">
                    <div className="p-5 bg-blue-100 rounded-xl mb-5">
                        <h1 className="text-center font-bold text-lg">Think Logistics, Think Abhiviridhi!</h1>
                        <p className="text-center">Get the Abhiviridhi mobile app to start booking your orders!</p>
                        <div className="flex justify-center items-center">
                            <img
                                className="my-5 w-60 h-60"
                                src="https://blog.porter.in/wp-content/uploads/qr_download.png"
                                alt="scan bar"
                            />
                        </div>
                        <p className="text-center">Scan to download our app!</p>
                    </div>

                    <div className="p-5 bg-blue-100 rounded-xl">
                        <h1 className="font-bold md:text-3xl text-xl text-[#1D4ED8]">
                            Ship your couriers with our Door to Door courier services
                        </h1>
                        <p className="mt-5 bg-[#1D4ED8] w-fit text-white px-4 py-2 rounded font-bold cursor-pointer"
                            onClick={() => navigate("/")}
                        >Book Abhiviridhi</p>
                        <div className="my-5">
                            <img
                                src="https://blog.porter.in/wp-content/uploads/porter-image.svg"
                                alt="Abhiviridhi"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {data?.images[1] &&
                <div className='w-full md:h-96 mt-5'>
                    <img src={data?.images[1]} alt="Image" className="w-full h-full mr-2 mt-2 rounded-xl" />
                </div>
            }
        </div>
    );
};

export default Single_blog_details;
