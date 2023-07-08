import React, { useState, useEffect } from 'react';
import img1 from "../Images/img-4.webp";
import img2 from "../Images/img-2.webp";
import img3 from "../Images/img-3.webp";
import img4 from "../Images/img-1.webp";
// import img5 from "../Images/img-5.webp";
import "./Hero.css"

const Hero = () => {
    const pic = [
        img1,
        img2,
        img3,
        img4
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeImage = (index) => {
        setCurrentImageIndex(index);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pic.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pic.length) % pic.length);
    };


    useEffect(() => {
        // Function to change the current image index
        const changeImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pic.length);
        };

        // Start the slideshow timer
        const timer = setInterval(changeImage, 4000);

        // Clean up the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero">
            <img src={pic[currentImageIndex]} alt="Slideshow"
                style={{ width: '100%', height: '100vh' }}
            />
            {currentImageIndex === 1 && (
                <div className="overlay">
                    <h1>BIALETTI MOKA EXPRESSION 1</h1>
                    <p>The new membership program
                        celebrating the art of coffee.</p>
                    <button>Learn More</button>
                </div>
            )}
            {currentImageIndex === 2 && (
                <div className="overlay">
                    <h1>BIALETTI MOKA EXPRESSION 2</h1>
                    <button>Learn More</button>
                </div>
            )}
            {currentImageIndex === 3 && (
                <div className="overlay">
                    <h1>BIALETTI MOKA EXPRESSION 3 </h1>
                    <button>Learn More</button>
                </div>
            )}
            {currentImageIndex === 4 && (
                <div className="overlay">
                    <h1>BIALETTI MOKA EXPRESSION 4</h1>
                    <button>Learn More</button>
                </div>
            )}
            <div className="carousel-buttons">
                <button onClick={previousImage}>&lt;</button>
                <button onClick={nextImage}>&gt;</button>
            </div>
        </div>
    );
};

export default Hero;





// import React from "react";
// import img1 from "../Images/img-1.webp";
// import img2 from "../Images/img-2.webp";
// import img3 from "../Images/img-3.webp";
// import img4 from "../Images/img-4.webp";
// import img5 from "../Images/img-5.webp";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper";
// import "swiper/css/bundle";

// const Hero = () => {
// 	SwiperCore.use([Autoplay, Navigation]);
// 	const listing = [img1, img2, img3, img4, img5];
// 	listing.map((img, id) => {
// 		console.log(img);
// 	});
// 	return (
// 		<>
// 			<Swiper
// 				slidesPerView={1}
// 				navigation
// 				effect="fade"
// 				modules={[EffectFade]}
// 				autoplay={{ delay: 3000 }}
// 			>
// 				{listing.map((img, id) => (
// 					<SwiperSlide key={id}>
// 						<div
// 							style={{
// 								background: `url(${img}) center,no-repeat`,
// 								backgroundSize: "cover",
// 								backgroundRepeat: "no-repeat",
// 							}}
// 							className="w-auto h-screen flex flex-col  items-center justify-center"
// 						>
// 						</div>
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 		</>
// 	);
// };

// export default Hero;