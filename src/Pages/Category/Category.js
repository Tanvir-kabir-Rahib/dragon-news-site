import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData()
    return (
        <div>
            {
                categoryNews.length !== 0 ?
                <h2>Total news found : {categoryNews.length} </h2>
                :
                <h2>No news found.</h2>
            }
            {
                categoryNews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;