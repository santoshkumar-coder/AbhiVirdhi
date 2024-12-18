import React from 'react';

interface CarouselButtonProps {
    onPrev: () => void;
    onNext: () => void;
}

const CarouselButton: React.FC<CarouselButtonProps> = ({ onPrev, onNext }) => {
    return (
        <>
            <button
                onClick={onPrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
                &#10094;
            </button>
            <button
                onClick={onNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
                &#10095;
            </button>
        </>
    );
};

export default CarouselButton;
