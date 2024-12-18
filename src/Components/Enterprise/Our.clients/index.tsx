import React from "react";
import Marquee from "react-fast-marquee";
import ourclientImage1 from '../../../assests/ourclients1.png'
import ourclientImage2 from '../../../assests/ourclients2.png'
import ourclientImage3 from '../../../assests/ourclients3.png'
import ourclientImage4 from '../../../assests/ourclients4.png'
import ourclientImage5 from '../../../assests/ourclients5.png'
import ourclientImage6 from '../../../assests/ourclients6.png'
import ourclientImage7 from '../../../assests/ourclients7.png'

const OurCients = () => {
    const images = [
        ourclientImage1,
        ourclientImage2,
        ourclientImage3,
        ourclientImage4,
        ourclientImage5,
        ourclientImage6,
        ourclientImage7,

    ];

    return (
        <div>
            <h1 className='text-center mb-10 text-gray-700 text-2xl font-extrabold'>Our Clients</h1>
            <div className="w-full py-8">
                <Marquee
                    gradient={false}
                    speed={20}
                    className="overflow-hidden"
                    pauseOnHover
                    direction="left"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className=" w-60 mx-4 flex justify-center items-center"
                        >
                            <img
                                src={image}
                                alt={`carousel-img-${index}`}
                                className="rounded-lg shadow-lg max-w-full"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default OurCients;
