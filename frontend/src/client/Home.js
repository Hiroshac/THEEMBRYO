import React from 'react'
import { Navbar } from '../commn/Navbar'
import image1 from '../image/ima1.jpg';
import image2 from '../image/ima2.jpg';
import '../style/css/client/home.css';
import { About } from './home/About';
import { Contact } from './home/Contact';
import { Object } from './home/Object';
import { Product } from './home/Product';

export const Home = () => {
  return (
    <div>
          <Navbar className=''/>
        <div>
          <div id="carouselExampleSlidesOnly" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src={image1} alt="First slide"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Welcome to SLTMobitel TheEmbryo</h1>
                    <p>Make Your Own Path to Discover The World</p>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src={image2} alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1>Welcome to SLTMobitel TheEmbryo</h1>
                    <p>Make Your Own Path to Discover The World</p>
                    <h2>Sri Lnaka Telecom</h2>
                  </div>
              </div>
            </div>
          </div>
          <Object/>
          <About/>
          <Product/>
          <Contact/>
        </div>
    </div>
  )
}
