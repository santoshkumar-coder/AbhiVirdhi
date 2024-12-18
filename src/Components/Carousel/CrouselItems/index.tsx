import React from 'react';
import { LuArrowUpRightFromCircle } from "react-icons/lu";

interface CarouselItemProps {  // Correct the spelling
    description: string;
    image: string;
}

const CarouselItems: React.FC<CarouselItemProps> = ({ description, image }) => {

    return (
        <div className="carousel-item flex flex-col justify-center items-center gap-10 ">
            <p className='text-center text-[2.4rem] font-bold'>{description}</p>
            <img
                className='w-80 h-20'
                src={image} alt="carousel" />
            <div className='flex items-center gap-2'>
                <a href="#" className='border-b-2 border-dashed border-white '>Read Artical
                </a>
                <LuArrowUpRightFromCircle />
            </div>
        </div>
    );
};

export default CarouselItems;
