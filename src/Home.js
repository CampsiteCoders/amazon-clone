import React from 'react';
import "./Home.css";
import Product from "./Product";
const pageBannerImgPath = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"

function Home() {
    return (
        <div className = "home">
            <div className="home__container">
              <img className="home__image" src={pageBannerImgPath} alt="banner" />
              
                <div className="home__row">
                    <Product id="2" title="Atomic Bear Paracord Bracelet (2 Pack) – Adjustable Size – Fire Starter – Loud Whistle – Emergency Knife – Perfect for Hiking, Camping, Fishing and Hunting – Black & Black+Orange" price={10.99} rating={4.5} image='https://m.media-amazon.com/images/I/81XvdmMQStL._AC_UL200_.jpg' /> 
                    <Product id="3" title="Solar Charger, F.Dorla 20000mAh Portable Outdoor Waterproof Solar Power Bank, Camping External Backup Battery Pack Dual 5V USB Ports Output, 2 Led Light Flashlight with Compass" price={17.99} rating={4.5} image='https://m.media-amazon.com/images/I/41Y-31Zp10L._AC_UL200_.jpg' />
                </div>

                  <div className="home__row">
                      <Product id="4" title="COMECASE Hard Battery Organizer Storage Box, Carrying Case Bag Holder - Holds 148 Batteries AA AAA C D 9V - with Battery Tester BT-168 (Batteries are Not Included)" price={23.99} rating={4} image='https://m.media-amazon.com/images/I/81BzsHfrfQL._AC_UL200_.jpg' />
                      <Product id="5" title="Emergency Solar Crank Radio, AM/FM/NOAA Weather Radio with Flashlight,2000 mAh Power Bank,SOS Alarm, Reading Lamp,Phone Charger for Tornadoes Hurricanes,and Storms (Orange)" price={33.97} rating={5} image='https://m.media-amazon.com/images/I/61Y5AoAIv3L._AC_UY218_.jpg' />
                  </div>
                  <div className="home__row">
                  <Product id="8" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Montior - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' />
                            </div>
                  <div className="home__row">
                      <Product id="6" title="Foval 200W Car Power Inverter DC 12V to 110V AC Converter with 4 USB Ports Charger" price={22.98} rating={4} image='https://m.media-amazon.com/images/I/51wBDH+pUGL._AC_UL320_.jpg' />
                      <Product id="7" title="Monocular Telescope, 12X50 HD Low Night Vision Waterproof- Shockproof High Power and Phone Adapter, Tripod Holder for Bird Watching Hunting Camping Hiking Travelling Secen" price={29.99} rating={3.5} image='https://m.media-amazon.com/images/I/91CoXefcnxL._AC_UY218_.jpg' />
                  </div>
                  
            </div>
        </div>
    )
}

export default Home
