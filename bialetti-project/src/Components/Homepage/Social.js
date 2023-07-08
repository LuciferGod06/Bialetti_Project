import React from 'react';
import './Social.css';

const Social = () => {
    return (
        <div className="container">
            <div className="left-side">
                <h1>Tell us what Moka <br />
                    means to you ❤️</h1>
                <p>Share your memories ✨, your photos 📸 and your thoughts ✒ <br />
                    on Moka on Instagram, tagging our account @bialetti <br />
                    and tell with us the unique story of the Moka Express.</p>
                <button>Publish Now</button>
            </div>
            <div className="right-side">
                <div className="image-container">
                    <img src="https://www.bialetti.com/media/wysiwyg/ugc-banner-image.png" alt="Image 1" className="image" />
                    {/* <img src="image2.jpg" alt="Image 2" className="image" />
          <img src="image3.jpg" alt="Image 3" className="image" /> */}
                </div>
            </div>
        </div>
    );
}

export default Social;
