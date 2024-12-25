import React from 'react'
import { useNavigate } from 'react-router-dom';
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
    id: string
}
interface ShowCardProps {
    item: Blog_fetch_data;
    index: number
}
const Show_Card: React.FC<ShowCardProps> = ({ item, index }) => {
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-center' onClick={() => navigate(`/blog/${item.category_name}/${item.id}`)}>
            {index % 2 === 0 ?
                <div className='flex cursor-pointer items-center justify-between border border-black hover:border-gray-400 w-[70%] h-60 rounded-xl pl-10'>
                    <div className='w-[50%] pr-5'>
                        <h1 className='text-lg text-gray-600 font-semibold'>{item.category_name}</h1>
                        <h1 className='text-xl font-semibold'>{item.subtitle}</h1>
                        <p className='text-lg text-gray-500 text-justify'>{item?.topics_and_descriptions && item.topics_and_descriptions[0].description.substring(0, 150)}...</p>
                    </div>
                    <div className='w-[50%] h-full'>
                        <img className='w-full h-full rounded-r-xl' src="https://blog.porter.in/wp-content/uploads/Porter-__-TyresnMore.webp" alt="porter" />
                    </div>
                </div>
                :
                <div className='flex cursor-pointer items-center justify-between border border-black hover:border-gray-400 w-[70%] h-60 rounded-xl pr-10'>
                    <div className='w-[50%] h-full'>
                        <img className='w-full h-full rounded-l-xl' src="https://blog.porter.in/wp-content/uploads/Porter-__-TyresnMore.webp" alt="porter" />
                    </div>
                    <div className='w-[50%] pl-5'>
                        <h1 className='text-lg text-gray-600 font-semibold'>{item.category_name}</h1>
                        <h1 className='text-xl font-semibold'>{item.subtitle}</h1>
                        <p className='text-lg text-gray-500 text-justify'>{item?.topics_and_descriptions && item.topics_and_descriptions[0].description.substring(0, 150)}...</p>
                    </div>

                </div>
            }
        </div>
    )
}

export default Show_Card