import React from 'react';
import { LuArrowUpRightFromCircle } from "react-icons/lu";

interface CarouselItemProps {  // Correct the spelling
    description: string;
    image: string;
}

const CarouselItems: React.FC<CarouselItemProps> = ({ description, image }) => {

    return (
        <div className="carousel-item flex flex-col justify-center items-center md:gap-10 gap-5">
            <p className='text-center md:text-[2.4rem] text-[1.2rem] font-bold'>{description}</p>
            <img
                className='md:w-80 w-60 md:h-20 h-14'
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
