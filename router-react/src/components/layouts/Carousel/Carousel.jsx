import React from 'react';
import "./Carousel.css";

const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="https://im.uniqlo.com/global-cms/spa/resa96a2b2abe820898a7512ddc011a5fd9fr.jpg"
                        className="d-block w-100"
                        alt="First slide"
                    />
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1 className='text-dark'>First Time Promotion!</h1>
                            <p className="opacity-75 text-dark">Jersey Relaxed Jacket:
                                Slightly short length
                                to match with different styles.</p>
                            <p><a className="btn btn-lg btn-dark" href="#">Buy Now!</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://image.uniqlo.com/UQ/ST3/jp/imagesother/000_PLP/Sweat/25SS/Men/LineupBanner-men-Shirts-01-pc.jpg"
                        className="d-block w-100"
                        alt="Second slide"
                    />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><a className="btn btn-lg btn-dark" href="#">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="https://im.uniqlo.com/global-cms/spa/res559db1d879d5443812eeb6d987496f65fr.jpg"
                        className="d-block w-100"
                        alt="Third slide"
                    />
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1 className='text-dark'>One more for good measure.</h1>
                            <p className='text-dark'>Some representative placeholder content for the third slide of this carousel.</p>
                            <p><a className="btn btn-lg btn-dark" href="#">Browse gallery</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;