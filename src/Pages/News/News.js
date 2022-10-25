import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { FaStar} from "react-icons/fa";

const News = () => {
    const news = useLoaderData()
    const {title, author, rating, details, image_url} = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Title className='text-center mt-4 px-3'>{title}</Card.Title>
                <div className='d-flex justify-content-evenly align-items-center mt-2'>
                    <div><span className='fw-bold'>Author: </span><span>{author?.name}</span></div>
                    <div><span className='fw-bold'>Published Date: </span><span>{author?.name}</span></div>
                    <div className='d-flex align-items-center'><FaStar className='text-warning me-2'></FaStar><span>{rating.number}</span></div>
                </div>
                <Card.Body>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;