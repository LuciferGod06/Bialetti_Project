import React from 'react';
import './FooterTop.css';

const FooterTop = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="logo-section">
                    {/* <img src="https://toppng.com/uploads/preview/logo-bialetti-11550728633ngufgly2ed.png" alt="Logo" className="logo" /> */}
                    <img src="https://www.liblogo.com/img-logo/bi8162b690-bialetti-logo-bialetti-logo-decals-by-cthulhu8u-community--sport.png" alt="Logo" className="logo" />
                    <h4>THE ESSENCE OF <br /> ITALIAN COFFEE CULTURE. </h4>
                </div>
                <div className="footer-links-top">
                    <img src='https://www.bialetti.com/media/wysiwyg/spedizione_4x.png' alt='delivery'/>
                    <h4>FREE DELIVERY <br/> <p>for order over $59.99</p>  </h4> 
                    
                    <img src='https://www.bialetti.com/media/wysiwyg/pagamenti_4x.png' alt='lock' />
                    <h4>PAYMENT SECURITY <br/> <p>via PayPal</p> </h4> 
                    
                    <img src='https://www.bialetti.com/media/wysiwyg/resi_4x.png' alt='return' />
                    <h4>FREE RETURNS  <br/> <p>within 14 days</p> </h4>
                    
                </div>
            </div>
        </footer>
    );
}

export default FooterTop;
