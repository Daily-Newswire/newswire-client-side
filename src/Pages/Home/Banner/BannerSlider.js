import React from 'react';
import './BannerSlider.css';

const BannerSlider = ({ slide }) => {

    const { image, id, prev, next } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full h-2/4 ">

            <div className='carousel-img'>
                <img src={image} alt="" className="carou-img rounded-xl" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">

                <h1 className='font-bold text-gray-50 lg:text-6xl'>
                    Hundred <span className='font-bold text-yellow-500'> STORIES</span>
                    <br />
                    One
                    <span className='font-bold text-yellow-500'> TRUTH</span><br />
                    Read the Best
                    <span className='font-bold text-yellow-500'> TODAY</span>
                </h1>
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerSlider;