import React, { useState } from "react";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <div className="prev-button" onClick={prevSlide}>
                <img className="arrow-left" src={require("../util/icons/arrowLeft.png")} alt=""/>
            </div>

            <div className="image-container">
                <img
                    className="carousel-image"
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>

            <div className="next-button" onClick={nextSlide}>
                <img className="arrow-right" src={require("../util/icons/arrowRight.png")} alt=""/>
            </div>
        </div>
    );
};

export default Carousel;
