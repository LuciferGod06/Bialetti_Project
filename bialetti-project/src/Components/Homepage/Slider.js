import React, { useEffect, useState }from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Slider.css"
import img1 from "../../Images/img-4.webp";
import img2 from "../../Images/img-3.webp";
import img3 from "../../Images/img-5.webp";
// import img4 from "../Images/img-6.webp";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(timer);
  }, []);


  return (
    <Carousel selectedItem={currentIndex} onChange={setCurrentIndex} >
      <div>
        <img src={img1} alt="Image 1" />
        <div className="carousel-caption">
          <h1>BIALETTI MOKA EXPRESSIONS</h1>
          <p>The new membership program <br />
            celebrating the art of coffee..</p>
          <button>FIND OUT MORE</button>
        </div>
      </div>
      <div>
        <img src={img2} alt="Image 2" />
        <div className="carousel-caption_2">
          <h1>A Wave of Style</h1>
          <p>The new Sunset Infinity Collection is here.</p>
          <button>FIND OUT MORE</button>
        </div>
      </div>
      <div>
        <img src={img3} alt="Image 3" />
        <div className="carousel-caption_3">
          <h1>Bialetti and <br/>
              Dolce&Gabbana</h1>
          <p>Two Made in Italy icons together, <br/>  
            to celebrate the ritual of Italian coffee..</p>
          <button>FIND OUT MORE</button>
        </div>
      </div>
      <div>
        <img src="https://www.bialetti.com/media/wysiwyg/induction-banner.jpg" alt="Image 3" />
        <div className="carousel-caption_4">
          <h1>LOVE NATURE, <br/>
            LOVE YOUR MOKA</h1>
          <p>Starting the day with a coffee: <br/> an Italian ritual unique in flavor..</p>
          <button>FIND OUT MORE</button>
        </div>
      </div>
    </Carousel>
  );
}

export default Slider;
