import React from 'react';
import "./MidBody.css";
// import image1 from "../Images/since1919.png";

const MidBody = () => {
    // const images = [image1, image2, image3, image4]
  return (
    <section className="mid-body">
      <div className="hexagon-container">
        <div className="hexagon"></div>
        <img className="hexagon-image" src="	https://www.bialetti.com/media/wysiwyg/PORCELLANE-new.jpg" alt="Coffee 1" />
        <h1>A wave of style</h1>
      </div>
      <div className="hexagon-container">
        <div className="hexagon"></div>
        <img className="hexagon-image" src="https://www.bialetti.com/media/wysiwyg/01_homepage_modulo_promo_coupon.jpg" alt="Coffee 2" />
        <h1>Bialetti Coupons</h1>
      </div>
      <div className="hexagon-container">
        <div className="hexagon"></div>
        <img className="hexagon-image" src="https://www.bialetti.com/media/magefan_blog/moka-nuova-featured.png" alt="Coffee 3" />
        <h1>Moka Express</h1>
      </div>
      <div className="hexagon-container">
        <div className="hexagon"></div>
        <img className="hexagon-image" src="https://www.bialetti.com/media/wysiwyg/store-locator-image-01_square.jpg" alt="Coffee 4" />
        <h1>Perfetto Moka</h1>
      </div>
      {/* <div className='container_2'>
        <img src={image1} alt="since1919" />
      </div> */}
    </section>
  );
};

export default MidBody;
