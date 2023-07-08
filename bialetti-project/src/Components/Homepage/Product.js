import React from 'react';
import './Product.css';
import coffeeImage from '../../Images/moka.jpg';

const Product = () => {
    return (
        <div className="moka-container">
            <section className="section_one">
                <div className="image-wrapper">
                    <img src={coffeeImage} alt="Coffee" className="coffee-image" />
                </div>
                <h1>THE REAL ITALIAN COFFEE EXPERIENCE, <br />
                    NOW SUITABLE FOR INDUCTION
                </h1>
                <button>FIND OUT MORE</button>
            </section>

            <section className="section_two">
                <div className="product">
                    <img src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/i/n/intenso_1.png" alt="Product 1" className="product-image" />
                    <h3>Perfetto Moka Intenso</h3>
                    <p>$9.99</p>
                </div>
                <div className="product">
                    <img src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/v/a/vaniglia_1.png" alt="Product 2" className="product-image" />
                    <h3>Perfetto Moka Vaniglia</h3>
                    <p>$4.49</p>
                </div>
                <div className="product">
                    <img src="https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/c/l/classico_1.png" alt="Product 2" className="product-image" />
                    <h3> Perfetto Moka Classico</h3>
                    <p>$4.99</p>
                </div>
            </section>
        </div>
    );
}

export default Product;
