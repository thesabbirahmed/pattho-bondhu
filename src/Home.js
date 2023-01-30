import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product id="123456" title='Lean Startup: How to Work Smarter and Not Harder While Innovating Faster and Satisfying Customers' price={18.99} image='https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY327_FMwebp_QL65_.jpg' rating={4} />
                    <Product id="456123" title='Original HP 67 Black/Tri-color Ink Cartridges (2 Count - Pack of 1) | Works with HP DeskJet 1255, 2700, 4100 Series, HP ENVY 6000, 6400 Series | Eligible for Instant Ink | 3YP29AN' price={35.57} image='https://m.media-amazon.com/images/I/51eBahpKdaL._AC_UL480_QL65_.jpg' rating={3} />
                </div>
                <div className="home__row">
                <Product id="4903850" title='HotHands Hand Warmer Value Pack' price={33.89} image='https://m.media-amazon.com/images/I/91tmt869VKL._AC_UL480_QL65_.jpg' rating={4} />
                <Product id="123456" title='Band Aid Brand Flexible Fabric Adhesive Bandages for Wound Care & First Aid' price={29.99} image='https://m.media-amazon.com/images/I/8133BQUVrEL._AC_UL480_QL65_.jpg' rating={2} />
                <Product id="456789" title='Final Season by Tim Green
' price={29.99} image='https://m.media-amazon.com/images/I/818TGLKK4SL._AC_UL480_FMwebp_QL65_.jpg' rating={4} />
                </div>
                <div className="home__row">
                <Product id="123456789" title='Avatar Controls TV LED Backlights, 9.8FT Smart LED Lights for Behind TV with Music Sync 16 Million Colors Changing RGB Strip Lights Works with Alexa Google Home for 40-60 inch TVs, WiFi APP Control ' price={16.93} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home