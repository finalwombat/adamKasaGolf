import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import menuButton from '../img/menu.png'
import closeButton from '../img/close.png'


const MenuMobile = () => {
    return (
      <Menu className="menuMobile" >
        <label onClick={toggleMenu}></label>
        <div className="menuContent">
            <ul onClick={toggleMenu}>
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

const toggleMenu = () => {
    const menu = document.querySelector(".menuMobile")
    menu.classList.toggle("open")
}

const Menu = styled.div`
            width: 100%;
            height: 40px;
            z-index: 1;
            padding-top: 10px;
            position: absolute;
            transition: 0.2s ease-in;
             
            &.open {
                height: 200px;
                background-color: rgba(0,0,0,0.7);
            }
            
            &.open .menuContent {
                max-height: 100%;
                width: 100%;
                padding-right: 50px;
            }

            &.open label {
                width: 100%;
                background: url(${closeButton}) no-repeat center;
            }

            & .menuContent {
                font-family: 'Oswald', sans-serif;
                width: 100vw;
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
                color: #4286f4;
                display:block;
                padding: 10px;
                text-decoration: none;
            }
            
            & label {
                color: white;
                background: url(${menuButton}) no-repeat center;
                padding: 10px 10px 10px 50px;
                z-index: 2;
            }


            `