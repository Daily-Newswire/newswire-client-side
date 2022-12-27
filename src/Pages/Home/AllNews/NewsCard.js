import React from 'react';

const NewsCard = ( { news }) => {
    const { id, author, content, description, publishedAt, urlToImage} = news;
    return (
        <div>
            <div className="card card-compact w-95 bg-base-100 shadow-xl">
                <figure><img src={urlToImage} alt="Shoes" className='rounded-xl w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{news.source.title}</h2>
                    <h2 className="card-title">{author}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>{description}</p>
                    <p className='text-2xl text-orange-600 font-semibold'>{content.length > 100 ? description.slice(0, 100) + '...' : description}</p>
                    <p className='text-2xl text-orange-600 font-semibold'>{publishedAt}</p>
                    {/* <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;