import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaShareAlt, FaBookmark, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image src={author?.img} style={{ height: "60px", width: "60px" }} roundedCircle></Image>
                    <div className='mt-2 ms-3'>
                        <p className='mb-0 fw-semibold'>{author?.name}</p>
                        <p className='text-secondary'>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaShareAlt className='me-3'></FaShareAlt>
                    <FaBookmark className='me-3'></FaBookmark>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 300 ?
                        <>{details.slice(0, 300) + "..."} <Link to={`/news/${_id}`}>read more</Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center px-4">
                <div className='d-flex align-items-center'><FaStar className='text-warning me-1'></FaStar> <span>{rating?.number}</span></div>
                <div className='d-flex align-items-center'><FaEye className='fs-5 me-2'></FaEye> <span>{total_view}</span></div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;