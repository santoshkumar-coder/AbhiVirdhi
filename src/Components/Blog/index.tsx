import React, { useEffect, useState } from 'react'
import Show_Card from './Show_Card'
import { blogs_data } from '../../api_fetch/blogs'
import { blog_category } from '../../api_fetch/blogs_category'
import BlogHeader from './Blog_Header'
import { blogs_dataBy_category } from '../../api_fetch/blog_by_categoryID'

interface Topic_Description {
    topic: string,
    description: string
}

interface Blog_fetch_data {
    category_name: string,
    images: string[],
    subtitle: string,
    title: string
    topics_and_descriptions: Topic_Description[],
    category_id: string
}

interface Blog_category_data {
    name: string,
    id: string
}

const Blog = () => {
    const [data, setData] = useState<Blog_fetch_data[] | null>(null)
    const [category_data, setCategory_Data] = useState<Blog_category_data[] | null>(null)
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

    const fetchData = async () => {
        const rs = await blogs_data();
        const rsCategory = await blog_category();
        setData(rs)
        setCategory_Data(rsCategory);
    }
    useEffect(() => {
        fetchData();
    }, [])
    const fetchDataByCategoryid = async () => {
        const rs = await blogs_dataBy_category(selectedCategoryId);
        setData(rs);
    }
    useEffect(() => {
        if (selectedCategoryId) {
            fetchDataByCategoryid();
        }
    }, [selectedCategoryId])
    return (
        <div className='min-h-screen font-titillium'>
            <BlogHeader category_data={category_data || undefined} setSelectedCategoryId={setSelectedCategoryId} />
            <div>
                <h1 className='text-center uppercase py-10 text-2xl font-extrabold'>Porter Pulse - Explore the World of Logistics!</h1>
            </div>
            <div className='space-y-5 mb-10'>
                {data?.map((item, index) => {

                    return (

                        <Show_Card key={index} item={item} index={index} />

                    )
                })}
            </div>
        </div>
    )
}

export default Blog