import React from 'react'
import Background from '../components/Background'
import backgroundImage from '../img/bag.png'
import driver from '../img/driver.png'
import fairway from '../img/fairway.png'
import iron from '../img/iron.jpg'
import wedge from '../img/wedge.jpg'
import putter from '../img/putter.jpg'
import kasa from '../img/kasa.jpg'

const AboutPage = () => {
    return (
      <div className="about">
        <Background img={backgroundImage}></Background>
        <div id="about-content">
          <div id="clubs">
            <p>In the bag -</p>
            <p>Driver: TaylorMade M1, X-Flex, 11°</p> <img src={driver} />
            <p>FW: TaylorMade M1, X-Flex, 15° & 19°</p> <img src={fairway} width="80px" height="80px"/>
            <p>Irons: Mizuno MP64, S300 Shafts, 4-PW</p> <img src={iron} />
            <p>Wedges : Mizuno TP5, S300 Shafts, 50°,54° & 58°</p> <img src={wedge} />
            <p>Putter: Odyssey Works #1 </p> <img src={putter} />
          </div>
          <div id="bio">
            <p>
            <p>Bio -</p>
            <p>Height: 182cm (6 foot)</p>
            <p>Weight: 85kg (185 pounds)</p>
            <p>DOB: 25th June 1984</p>
            <p>Birthplace: Zalaegerszeg, Hungary</p>
            </p>
            <img src={kasa} />
          </div>
          
        </div>
      </div>
    );
  }

export default AboutPage
