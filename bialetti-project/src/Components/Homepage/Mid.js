import React from 'react';
import './Mid.css';
// import img1 from "../Images/5.PNG";
import img2 from "../../Images/6.PNG";
import img3 from "../../Images/2.PNG";
import img4 from "../../Images/3.PNG";

const Mid = () => {
    // const pic = [
    //     img1,
    //     img2,
    //     img3,
    //     img4
    // ];
    return (
        <div className="mid-container">
            <div className="section-top">
                <p> DISCOVER <br /> THE BIALETTI <br /> EXPERIENCE *</p>
                <h1>THE ESSENCE <br /> OF ITALIAN COFFEE <br /><span>SINCE 1919</span> CULTURE.</h1>
            </div>
            <div className="section_1">
                <div className="section_1-left">
                    <img src={img3} />
                </div>
                <div className="section_1-right">
                    <h3>Moka Express </h3>
                    <h5>SINCE 1933, THE COFFEE POT <br /> THAT BRINGS US TOGETHER</h5>
                    <p>Moka Express is the real Italian coffee experience.<br/>So much
                        more than an object, the iconic <br/> Moka pot represents our country’s joy, audacity, creativity, <br/> and, of course, its convivial way of living.
                    </p>
                    <button>Find Out More</button>
                </div>
            </div>
            <div className="section_2">
                <div className="section_2-left">
                    <h3>Perfetto Moka</h3>
                    <h5>THE BIALETTI GROUND COFFEE <br/> FOR MOKA LOVERS</h5>
                    <p>Moka Express is the real Italian coffee experience.<br/>So much
                        more than an object, the iconic <br/> Moka pot represents our country’s joy, audacity, creativity, <br/> and, of course, its convivial way of living.
                    </p>
                    <button>Find Out More</button>
                </div>
                <div className="section_2-right">
                    <img src={img4} />
                </div>
            </div>
            <div className="section_3">
                <div className="section_3-left">
                    {/* <img src={img1} /> */}
                    <img src='https://www.bialetti.com/media/wysiwyg/xx_torrefazione_bialetti_capsule.png' />
                </div>
                <div className="section_3-right">
                    <img src={img2} />
                </div>
            </div>
        </div>
    );
}

export default Mid;



//  <div className="section">
//                 <div className="section-left">
//                      <img src={img3} alt="Image 1" />
//                     <h1>Section 1</h1>
//                     <h4>Subtitle</h4>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <button>Button</button>
//                 </div>
//                 <div className="section-right">
//                     <img src={img4} alt="Image 2" />
//                     <h1>Section 2</h1>
//                     <h4>Subtitle</h4>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     <button>Button</button>
//                 </div>
//             </div>
//             <div className="section">
//                 <div className="section-left">
//                     <img src={img1} alt="Image 3" />
//                 </div>
//                 <div className="section-right">
//                     <img src={img2} alt="Image 4" />
//                 </div>
//             </div> 