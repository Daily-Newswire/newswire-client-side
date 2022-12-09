import React from 'react';
import imgOne from '../../../assets/images/imgOne.jpg';
import imgThree_2 from '../../../assets/images/imgThree_2.jpg';
import imgFour from '../../../assets/images/imgFour.jpg';
import imgSix from '../../../assets/images/imgSix.jpg';
import BannerSlider from './BannerSlider';

const bannerData = [
    {
        image: imgOne,
        prev: 4,
        id: 1,
        next: 2
    },
    {
        image: imgThree_2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: imgFour,
        prev: 2,
        id: 3,
        next: 4
    },
    {
        image: imgSix,
        prev: 3,
        id: 4,
        next: 1
    }
]

const Banner = () => {
    return (
        <div className='w-[99%] mx-auto'>
            <div className='carousel py-2 mx-auto'>
                {
                    bannerData.map(slide=><BannerSlider
                        key={slide.id}
                        slide={slide}
                    ></BannerSlider>)
                }
            </div>
        </div>
    );
};

export default Banner;