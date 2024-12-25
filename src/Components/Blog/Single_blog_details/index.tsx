import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
        <div className="min-h-screen font-titillium p-10">
            <div>
                <h1 className="capitalize pb-10 text-3xl font-extrabold">
                    {data?.title}
                </h1>
            </div>
            <div>
                <div className="w-[60%] h-80 text-center">
                    <img className="w-full h-[85%]" src={data?.images[0]} alt="" />
                    <h1 className="text-xl mt-5">{data?.subtitle}</h1>
                </div>
                <div className="my-10">
                    {data?.topics_and_descriptions?.map((item, index) => (
                        <div key={index}>
                            <h1 className="font-bold text-lg">{item.topic}</h1>
                            <div className="py-1 mx-5 text-justify">
                                {/* Apply the line breaks and render each line properly */}
                                {item.description.split("\n").map((line, lineIndex) => (
                                    <p key={lineIndex} className="flex items-start">
                                        <FaSquare className="w-[5px] h-[5px] mr-2 mt-[4px]" />
                                        <p>{line}</p>
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Single_blog_details;
