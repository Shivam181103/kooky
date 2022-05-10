import React from 'react'
import './landing.css'
import img1 from './Assets/NEW1.jpg';
import img2 from './Assets/img2.jpg';
import img3 from './Assets/img3.jpg';
import img4 from './Assets/img4.jpg';
import img5 from './Assets/img5.jpg';
import img6 from './Assets/img6.jpg';
import img7 from './Assets/img7.jpg';
import img8 from './Assets/img8.jpg';
import {Link} from 'react-router-dom';
import img9 from './Assets/img9.jpg';
import img10 from './Assets/img10.jpeg'
import img12 from './Assets/img12.png'
import img13 from './Assets/img13.png'
import img14 from './Assets/img14.jpeg'
import img15 from './Assets/img15.jpeg'


import Slider from 'react-slick'
function landing() {
  
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
         
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <div className=" row m-0 landing-wrapper">
                <div className=" col col-lg-6 col-md-6 col-sm-12 col-xm-12 landing-img">
 
                         <div>
                            <div className="slider-img">


                                <img src={img1} alt="" />
                            </div>
                        </div>
                        
                    
                </div>
                <div className=" col col-lg-6 col-md-6 col-sm-12 col-xm-12 landing-text">
                    {/* <p className='natural'>ALL NATURAL</p> */}
                    <h1>KOOKY WATERLESS SHAMPOO<br/>For Everyone</h1>
                    <p className='about-product' >This product is made using cleansing charcoal and special conditioning quality, which gives you perfect hair ever so quick!</p>
                    <a href="https://rzp.io/l/FG2Bf6o5m"><button className='order-now' >Order Now</button></a>
                </div>
            </div>
            <div id='feature'  className="product-features row m-0  ">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xm-12 features-text">
                    <p style={{fontWeight:'600',fontSize:'1.5rem', color:'#b77943'}}>PRODUCT FEATURES</p>
                    <h1> Perks of Kooky</h1>
                    <p className='about-product' > • Smooth, shiny, silky hair<br/>
• Voluminous effect<br/>
• Conditioning and care<br/>
• Water-"LESS" Instant Solution<br/>
• Add mild fragrance to your hair
</p>
                    
                                    </div>
                <div  className="col col-lg-6 col-md-6 col-sm-12 col-xm-12 features-img ">
                  <img  src={img14} alt="" />
                </div>

                <div className="slide-container">
                    <Slider {...settings1}>

                        <div className='slider-img-wrapper'>
                            <div className='slider-img-container'><img className='slider-img-second'  src={img3} alt="" />
                        </div></div>
                        <div>
                            <div className='slider-img-container'><img className='slider-img-second'  src={img15} alt="" />
                        </div></div>
                        <div>
                           <div className='slider-img-container'> <img  className='slider-img-second' src={img4} alt="" />
                       </div> </div>
                        <div>
                            <div className='slider-img-container'><img className='slider-img-second'  src={img5} alt="" />
                        </div></div>
                    </Slider>
                </div>
            </div>
       <div className="ninitynine row m-0">
           <div className="col col-lg-6 img-container">
                <div className="img-cont">
                <img src={img6} />
                </div>
           </div>
           <div className="col col-lg-6 text-cont-99">
               <h1>149rs Only</h1>
               <h2>Flawless hair is an art, and Kooky can be your muse! Buy Kooky in Rs. 149/- Only!</h2>
               <a href="https://rzp.io/l/FG2Bf6o5m"><button className='order-now' >Order Now</button></a>
           </div>
       </div>
            {/* <div className="before-after">
                <div className='befo-after row m-0 '>
                    <div className="col col-lg-5 col-sm-12 col-xm-12 befo-after-text">
                      <p style={{color:'#b77943'}}>Free Delivery</p>
                      <h1>Add Wow To Your Hairs</h1>
                      <p className='befo-product'> Beautiful hairs requires commitment.</p>
                      <a href="https://rzp.io/l/FG2Bf6o5m"><button className='order-now' >Order Now</button></a>

                    </div>
                    <div className="col col-lg-7 col-sm-12 col-xm-12 before-after-img">
                        <img   src={img10} alt="" />
                    </div>
                </div>
               
            </div> */}
            <div className="footer-wrapper">
                <div className="footer-img-container">
                    <div className='foot-img1'><img src={img12} className="foot-img" /></div>
                    <div className='foot-img2'><img src={img13} className="foot-img"  /></div>
                </div>
            <div className="footers row m-0">
                <div className="col col-lg-6 col-sm-12 col-md-6 col-xm-12">
                    <p>Quick Contact</p>
                    <button>  <a href="https://instagram.com/kooky_india?utm_medium=copy_link">  Connect With Us </a></button>
                    
                 </div>
                 <div className="col col-lg-6 col-sm-12 col-md-6 col-xm-12 follow-us"><a href=""> Follow Us </a></div>
                 <hr  />
                 <p style={{color:'black'}} >Copyright 2022, Kooky</p>
            </div>
            
            </div>
        </>
    )
}

export default landing