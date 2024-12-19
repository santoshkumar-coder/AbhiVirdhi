import React, { useState } from 'react';
import CarouselItems from './CrouselItems';
import CarouselButton from './CarouselButton';

interface CarouselItem {
    headline: string;
    image: string;
}

interface CarouselProps {
    items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const onPrev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    const onNext = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    console.log(currentIndex);

    return (
        <div className='relative w-full max-w-[80%] mx-auto overflow-hidden pb-20'>
            {items ? <>
                <div className='mt-10 flex transition-transform duration-700 ease-in-out'
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className='w-full flex-shrink-0'>
                            <CarouselItems description={item.headline} image={item.image} />
                        </div>
                    ))}
                </div>
                <CarouselButton onPrev={onPrev} onNext={onNext} />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {items.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-gray-400 w-5' : 'bg-white'}`}
                        />
                    ))}
                </div></> : <div>Loading</div>}
        </div>


    )
}

export default Carousel