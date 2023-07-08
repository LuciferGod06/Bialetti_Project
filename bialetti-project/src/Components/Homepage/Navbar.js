// import React from 'react'
// import { FaSearch, FaUser, FaShoppingBag, FaBars } from 'react-icons/fa';

// import "./Navbar.css";



// const Navbar = () => {



//     return (
//         <nav className="navbar">
//             <div className="logo">
//                 <img src="https://www.bialetti.com/media/logo/default/5-layers_3x.png" alt="Logo" />
//                 {/* <span>COFFEE ROASTING BIALETTI</span> */}
//             </div>
//             <div className="menu">
//                 <ul>
//                     <li>
//                         <a href="https://www.bialetti.com/it_en/bialetti-torrefazione" className="active">COFFEE ROASTING BIALETTI</a>
//                     </li>
//                     <li>
//                         <a href="#" className="active">MOKA EXPRESS</a>
//                     </li>
//                     <li>
//                         <a href="#" className="active">PRODUCTS</a>
//                     </li>
//                     <li>
//                         <a href="#">NEWS</a>
//                     </li>
//                     <li>
//                         <a href="#">INSPIRATION</a>
//                     </li>
//                     <li>
//                         <a href="#">STORES</a>
//                     </li>
//                 </ul>
//             </div>
//             <div className="icons">

//                 <a href="#"><i className="fa fa-search"><FaSearch /></i></a>
//                 <a href="#"><i className="fa fa-user"><FaUser /></i></a>
//                 <a href="#"><i className="fa fa-shopping-cart"><FaShoppingBag /></i></a>
//                 <a href="#"><i className="fa fa-bars"></i><FaBars /></a>
//             </div>
//         </nav>
//     )
// }

// export default Navbar





import React from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaHeart, FaBars } from 'react-icons/fa';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="top-bar">
                <img src='https://www.bialetti.com/static/version1686550349/frontend/bialetti/bialetti_italia/en_US/icons/Truck.svg' />
                <div className="free-shipping"> <p> Free shipping for orders over 59,90€ </p></div>
            </div>
            <div className="language">
                <span>EN</span>----<span>IT</span>
            </div>
            <div className="logo">
                <img src="https://www.bialetti.com/media/logo/default/5-layers_3x.png" alt="Logo" />
            </div>
            <div className="icons">
                <a href="#">
                    <FaSearch />
                </a>
                <a href="#">
                    <FaHeart />

                </a>
                <a href="#">
                    <FaUser />
                </a>
                <a href="#">
                    <FaShoppingBag />
                </a>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="https://www.bialetti.com/it_en/bialetti-torrefazione">
                            COFFEE ROASTING BIALETTI
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            MOKA EXPRESS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            PRODUCTS
                        </a>
                    </li>
                    <li>
                        <a href="#">NEWS</a>
                    </li>
                    <li>
                        <a href="#">INSPIRATION</a>
                    </li>
                    <li>
                        <a href="#">STORES</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
