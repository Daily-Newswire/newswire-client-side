import React from 'react';
import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const AllNews = () => {
    const [newses, setAllNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=apple&from=2022-12-26&to=2022-12-26&sortBy=popularity&apiKey=784446698e9d4dedb6e1f5a1bb04df76`)
            .then(res => res.json())
            .then(data => setAllNews(data));
    }, []);

    return (
        <div className='mb-20'>
            <div className='text-center mb-4'>
                <p className="text-4xl mb-3 font-bold text-indigo-600">All News</p>
                <h2 className="text-5xl font-semibold text-blue-600 mb-4">Read every story there is!</h2>
                <p className='text-2xl font-semibold mb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div>
                {
                    newses.map(news => <NewsCard
                        key={news.id}
                        news={news}
                    ></NewsCard>)
                }
            </div>
        </div>

    );
};

export default AllNews;