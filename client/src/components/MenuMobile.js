import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import menuButton from '../img/menu.png'
const Menu = styled.div`
            width: 30vw;
            position: absolute;
            z-index: 1;
            margin-left: 10px;
            margin-top: 10px;
             

            & .menuContent {
                font-family: 'Oswald', sans-serif;
                background-color: white;
                width: 100%;
                box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
                max-height: 0;
                overflow: hidden; 
                
            }

            & ul {
                list-style-type: none;
                padding: 0;  
                width: 100%;
            }

            & a {
                display:block;
                padding: 10px;
                text-decoration: none;
            }
            
            & label {
                color: white;
                background: url(${menuButton}) no-repeat left center;
                width: 100%;
                height: 100%;
                padding: 10px 0 10px 50px;
            }

            & input#menu {
                display: none
            }

            & input:checked ~ .menuContent {
                max-height: 100%;
                width: 100%;
                padding-right: 50px;
            }
            `

const MenuMobile = () => {
    return (
      <Menu className="menuMobile">
        <input type="checkbox" id="menu" />
        <label for="menu"></label>
        <div className="menuContent">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/partners">Partners</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
      </Menu>
    );
  }

export default MenuMobile
