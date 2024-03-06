import React from 'react';
import './Page6.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Page6 = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
        <div className="page7">
            <div className="container">
            <h1 style={{color:"black", marginLeft:"50PX"}}>About Us</h1>
            <br />
                <div className="carousel">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2 style={{ width: '30%',  padding: '0px', color:"blue", marginLeft:"90px", marginBottom:"20px"}}>Why</h2>
                <h2 style={{ width: '30%',  padding: '0px', color:"blue" ,marginLeft:"90px"}}>Choose</h2>
                <img src='/jww1-smaller 1.png' style={{marginRight:"40px"}}/>

                </div>
                    <Slider {...settings}>
                        <div className="box">
                            <h2 style={{textAlign:"center"}}>Culture</h2>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>
                        </div>
                        <div className="box">
                            <h3>Unity in Diversity</h3>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>

                        </div>
                        <div className="box">
                        <h3>Unity in Diversity</h3>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>

                        </div>
                        <div className="box">
                            <h2 style={{textAlign:"center"}}>Culture</h2>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>
                        </div>
                        <div className="box">
                            <h3>Unity in Diversity</h3>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>

                        </div>
                        <div className="box">
                        <h3>Unity in Diversity</h3>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>

                        </div>
                        <div className="box">
                            <h2 style={{textAlign:"center"}}>Culture</h2>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>
                        </div>
                        <div className="box">
                            <h3>Unity in Diversity</h3>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>

                        </div>
                        <div className="box">
                        <h3>Unity in Diversity</h3>
                            <p style={{margin:"15px"}}>The workplace at J.W. Infotechembodies an open environmentwhere flexibility and productivitycoexist seamlessly. Withhybrid nature of work, ouremployees experience acreativity and collaboration</p>

                        </div>
                    </Slider>
                </div>
            </div>

            <div className="letter" style={{marginLeft:"80px"}}> 
            <h1 style={{  marginTop: "20px" }}>FAQ's</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '30%',  padding: '20px', }}>
        <h2><u>How to make the Card <br />Blog ?</u></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus corrupti id optio ullam voluptatem officia expedita aliquam dolor iste.</p>
        <a href="#" className='btn' style={{ display: 'block', width: '100%', textDecoration: 'none', color: 'black', textAlign: 'center', padding: '10px 0', borderRadius: '5px', background: 'yellow', color: 'black' }}>READ BLOG</a>
      </div>
      <div style={{ width: '30%',  padding: '20px', }}>
      <h2><u>How to make the Card <br />Blog ?</u></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus corrupti id optio ullam voluptatem officia expedita aliquam dolor iste.</p>
        <a href="#" className='btn' style={{ display: 'block', width: '100%', textDecoration: 'none', color: 'black', textAlign: 'center', padding: '10px 0', borderRadius: '5px', background: 'yellow', color: 'black' }}>READ BLOG</a>
      </div>
      <div style={{ width: '30%',  padding: '20px', }}>
      <h2><u>How to make the Card <br />Blog ?</u></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus corrupti id optio ullam voluptatem officia expedita aliquam dolor iste.</p>
        <a href="#" className='btn' style={{ display: 'block', width: '100%', textDecoration: 'none', color: 'black', textAlign: 'center', padding: '10px 0', borderRadius: '5px', background: 'yellow', color: 'black' }}>READ BLOG</a>
      </div>
     
    </div>
                
            </div>
           
            
        </div>
    );
};

export default Page6;
