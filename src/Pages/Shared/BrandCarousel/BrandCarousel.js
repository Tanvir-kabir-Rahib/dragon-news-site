import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from "../../../assets/brands/brand1.jpeg"
import Brand2 from "../../../assets/brands/brand2.png"

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        style={{height:"200px"}}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        style={{height:"200px"}}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;