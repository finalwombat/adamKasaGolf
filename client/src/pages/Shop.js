import React from 'react'
import Balls from '../img/akBalls.jpg'
import Shirt from '../img/akTshirt.jpg'
import Tees from '../img/akTee.jpg'
import './Shop.css'

const Shop = () => {
    return (
      <div className="shop">
        <div class="shop-content">
          <div class="shop-items">
            <div class="item">
              <img src={Shirt} />
              <div class="item-text">
                AK Golf Logo Tee - Black - Size S, M, L & XL. $40
              </div>
            </div>
            <div class="item">
              <img src={Balls} />
              <div class="item-text">
                Sleeve of Titleist Pro V1x AK Golf Logo balls. $20
              </div>
            </div>
            <div class="item">
              <img src={Tees} />
              <div class="item-text">
                AK Golf Logo Golf Tees - 25 Pack. $15.
              </div>
            </div>
          </div>
          <div class="bottomSection"><a href="mailto:  <kasawary@gmail.com>"><button class="contactButton">Contact</button></a></div>
        </div>
      </div>
    );
  }

export default Shop